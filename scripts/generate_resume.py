"""Generate Paul Karonji's ATS-friendly resume PDF (public/resume.pdf).

Content mirrors the master resume text (September 2026). Re-run after edits:
    python scripts/generate_resume.py
"""
import os

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "resume.pdf")

# Palette from pdf.py palette.generate --mode minimal (violet accent matches portfolio)
ACCENT = colors.HexColor("#582fd0")
TEXT_PRIMARY = colors.HexColor("#272623")
TEXT_MUTED = colors.HexColor("#5f5c54")

pdfmetrics.registerFont(TTFont("TNR", "C:/Windows/Fonts/times.ttf"))
pdfmetrics.registerFont(TTFont("TNR-Bold", "C:/Windows/Fonts/timesbd.ttf"))
pdfmetrics.registerFont(TTFont("TNR-Italic", "C:/Windows/Fonts/timesi.ttf"))
pdfmetrics.registerFont(TTFont("TNR-BoldItalic", "C:/Windows/Fonts/timesbi.ttf"))
registerFontFamily("TNR", normal="TNR", bold="TNR-Bold",
                   italic="TNR-Italic", boldItalic="TNR-BoldItalic")


def md(text):
    """Escape XML then convert **bold** / *italic* markers to <b>/<i> tags."""
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    out, bold, ital, i = [], False, False, 0
    while i < len(text):
        if text.startswith("**", i):
            out.append("</b>" if bold else "<b>")
            bold = not bold
            i += 2
        elif text[i] == "*":
            out.append("</i>" if ital else "<i>")
            ital = not ital
            i += 1
        else:
            out.append(text[i])
            i += 1
    return "".join(out)


name_style = ParagraphStyle("Name", fontName="TNR-Bold", fontSize=20, leading=23,
                            alignment=TA_CENTER, textColor=TEXT_PRIMARY, spaceAfter=2)
role_style = ParagraphStyle("Role", fontName="TNR", fontSize=11.5, leading=14,
                            alignment=TA_CENTER, textColor=TEXT_PRIMARY, spaceAfter=3)
contact_style = ParagraphStyle("Contact", fontName="TNR", fontSize=9.5, leading=12.5,
                               alignment=TA_CENTER, textColor=TEXT_MUTED, spaceAfter=2)
section_title_style = ParagraphStyle("SectionTitle", fontName="TNR-Bold", fontSize=12,
                                     leading=14, spaceBefore=4.5, spaceAfter=2,
                                     textColor=ACCENT)
entry_title_style = ParagraphStyle("EntryTitle", fontName="TNR", fontSize=10.1,
                                   leading=12.4, spaceBefore=1.5, spaceAfter=0,
                                   textColor=TEXT_PRIMARY)
entry_meta_style = ParagraphStyle("EntryMeta", fontName="TNR", fontSize=9.3,
                                  leading=11.6, textColor=TEXT_MUTED, spaceAfter=1.5)
tech_style = ParagraphStyle("Tech", fontName="TNR-Italic", fontSize=9.3,
                            leading=11.6, textColor=TEXT_MUTED, spaceAfter=1.5)
body_style = ParagraphStyle("Body", fontName="TNR", fontSize=9.6, leading=12.05,
                            textColor=TEXT_PRIMARY, spaceAfter=1.5)
bullet_style = ParagraphStyle("Bullet", fontName="TNR", fontSize=9.6, leading=12.05,
                              leftIndent=14, bulletIndent=4, spaceBefore=0.1,
                              spaceAfter=0.1, textColor=TEXT_PRIMARY)
skills_style = ParagraphStyle("Skills", fontName="TNR", fontSize=9.6, leading=12.05,
                              spaceAfter=1, textColor=TEXT_PRIMARY)


def section(title):
    return [
        Paragraph(md(f"**{title}**"), section_title_style),
        HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceBefore=0, spaceAfter=3),
    ]


def entry(title, meta=None, tech=None):
    parts = [Paragraph(md(f"**{title}**"), entry_title_style)]
    if meta:
        parts.append(Paragraph(md(meta), entry_meta_style))
    if tech:
        parts.append(Paragraph(md(tech), tech_style))
    return parts


def bullets(items):
    return [Paragraph(md(b), bullet_style, bulletText="\u2022") for b in items]


def exp_entry(title, meta=None, tech=None, items=None):
    """Entry whose header + first bullet stay together (no orphaned headings)."""
    header = entry(title, meta, tech)
    items = items or []
    if items:
        rest = bullets(items)
        return [KeepTogether(header + [rest[0]])] + rest[1:]
    return header


story = []

# ── Header ──────────────────────────────────────────────────────────────────
story.append(Paragraph("PAUL KARONJI WAITHAKA", name_style))
story.append(Paragraph("Full-Stack Software Engineer", role_style))
story.append(Paragraph("Nairobi, Kenya (Remote-ready, EAT/UTC+3) \u2022 paulkaronji.netlify.app \u2022 "
                       "karonjipaul.w@gmail.com",
                       contact_style))
story.append(Paragraph("+254 729 089 168 \u2022 linkedin.com/in/paul-karonji \u2022 github.com/Paul-Karonji",
                       contact_style))

# ── Professional Summary ────────────────────────────────────────────────────
story += section("PROFESSIONAL SUMMARY")
story.append(Paragraph(md(
    "Full-stack engineer shipping production systems with live users: a hospital management "
    "platform running in 3 hospitals, SaaS products processing real card payments, and an "
    "offline-first POS suite with KRA eTIMS fiscalization. Final-year BSc Software Development "
    "student (KCA University, expected July 2027) with 3+ years building across Kenya's payment "
    "rails (M-Pesa Daraja, Paystack), offline-first architecture, real-time systems, and AI agent "
    "tooling (MCP). Works fully remote and async \u2014 all client and team engagements to date."),
    body_style))

# ── Technical Skills ────────────────────────────────────────────────────────
story += section("TECHNICAL SKILLS")
skills = [
    ("Languages", "TypeScript, JavaScript (ES6+), Go, PHP, Kotlin, Python, SQL, Bash"),
    ("Backend", "Node.js, Express, NestJS, Laravel 10/12, Go (Chi, pgx/pgxpool, Gorilla "
                "WebSocket), REST APIs, WebSockets/Socket.IO, Prisma, Eloquent ORM"),
    ("Frontend", "React 18/19, Next.js 14\u201316, React Native (Expo), Electron, Tailwind CSS, "
                 "shadcn/ui, TanStack Query, PWA, Leaflet"),
    ("Databases & Cache", "PostgreSQL, MySQL, SQLite, TiDB Serverless, Supabase, Firebase, "
                          "Upstash Redis, Pinecone"),
    ("Cloud & DevOps", "Vercel, Docker, GitHub Actions CI/CD, Cloudflare R2, Render, Oracle "
                       "Cloud, Neon, Caddy, Vercel Cron"),
    ("Payments & Kenya Rails", "M-Pesa Daraja (STK Push, C2B callbacks), Paystack (card), "
                               "KRA eTIMS (OSCU/VSCU fiscalization), Africa's Talking SMS, "
                               "WhatsApp Cloud API"),
    ("AI & Integrations", "Multi-model LLM orchestration (AI SDK: Anthropic, OpenAI, Groq, "
                          "Mistral, OpenRouter), MCP server development, Google Calendar API v3, "
                          "Cloudinary, Resend, VAPID Push"),
    ("Security", "JWT, Row-Level Security, CSRF, CSP, rate limiting, webhook signature "
                 "verification (raw-byte), HMAC-SHA256 timing-safe flows, hardware "
                 "fingerprinting, CVE patching, Zod"),
    ("Architecture", "Offline-first, multi-tenant SaaS, white-labeled instance deployment, "
                     "hardware licensing, real-time event streaming, monorepo (Turborepo)"),
    ("Testing", "Jest, Vitest, Playwright, Supertest, Go testing, Swagger/OpenAPI"),
]
for label, values in skills:
    story.append(Paragraph(md(f"**{label}:** {values}"), skills_style))

# ── Professional Experience ─────────────────────────────────────────────────
story += section("PROFESSIONAL EXPERIENCE")

_wik_intro = Paragraph(md(
    "Built and lead a software company whose products serve live users today: a hospital "
    "management platform running in 3 hospitals and a production POS platform \u2014 working "
    "with a small engineering team."), body_style)
story += [KeepTogether(entry("Lead Engineer \u2014 WIK Technologies",
                             "Nairobi, Kenya | Oct 2025 \u2013 Present") + [_wik_intro])]
story += bullets([
    "Architected WIK-POS, an offline-first desktop POS suite (Electron + React + TypeScript + "
    "SQLite): hardware-bound JWT licensing (CPU + MAC fingerprint), M-Pesa Daraja STK Push with "
    "IP-guarded callbacks, and KRA eTIMS fiscalization (OSCU worker, AES-256-encrypted tax "
    "credentials) \u2014 modular editions for retail, hotel F&B (KOT), and pharmacy (PPB batch "
    "tracking, 60-day FEFO quarantine); production-deployed at pos.wiktechnologies.com.",
    "Built Pos-License-Server, a centralized licensing authority with a 3-tier model (lifetime / "
    "subscription / trial), hardware fingerprinting, and remote revocation \u2014 Docker + Caddy "
    "deployment across Render/Oracle Cloud with Neon PostgreSQL and automated Cloudflare R2 backups.",
    "Led engineering of WIK HMS, a hospital management system (Laravel 12, React 19) live in 3 "
    "hospitals via white-labeled per-client instances: 200+ REST endpoints, 56 migrations, "
    "Observer-pattern automated billing, real-time triage queues, and FEFO pharmacy registers; "
    "live demo at hmisdemo.wiktechnologies.com.",
])

story += exp_entry(
    "Founding Engineer \u2014 Atlas Data (FleetTrack)",
    "Remote | Aug 2026 \u2013 Present",
    items=[
        "Sole founding engineer of a multi-tenant fleet-telematics and dispatch platform, built "
        "end-to-end: high-concurrency Go backend (Chi, pgxpool, Gorilla WebSocket), React 19 web "
        "console, and Expo/React Native driver app; deployed in active testing at "
        "fleetops-mauve.vercel.app.",
        "Built the offline-first telemetry pipeline: driver devices buffer GPS/battery samples in "
        "SQLite and sync in batches on reconnect; a PostgreSQL hot-state cache feeds real-time "
        "WebSocket fan-out to dispatchers' live maps.",
        "Shipped automated transit-safety systems: 30-minute stoppage detection auto-raises critical "
        "incidents and live-map alerts; QR/passcode dispatch claiming; pre/post-trip inspections that "
        "lock vehicles on critical failures \u2014 with 4-role RBAC and sequential SQL migrations.",
    ])

story += exp_entry(
    "Technical Lead (Industrial Attachment \u2014 internship) \u2014 JHUB Africa",
    "Nairobi, Kenya | Sep 2025 \u2013 Dec 2025",
    items=[
        "Led a development team building the JHUB Africa Innovation Tracker "
        "(innovation.jhubafrica.com), a PHP/MySQL/Docker platform for JKUAT Hub: 4 user roles, "
        "6-stage project lifecycle, mentor-assignment engine, document management, and activity "
        "audit logs \u2014 delivered on schedule and live in active use.",
        "Established team coding standards (PSR-12) and ran code reviews.",
    ])

story += exp_entry(
    "Freelance Software Developer", "Nairobi, Kenya (Remote) | 2023 \u2013 Present",
    items=[
        "Delivered 10+ end-to-end products for clients \u2014 including K-Track (tutor-agency SaaS, "
        "below), a flower-shop commerce system with M-Pesa STK Push integration, tenant Wi-Fi billing "
        "(Hotbill), a school ERP (Wikscholar), and a logistics/waybill system (Logit) \u2014 owning "
        "requirements, architecture, deployment, and maintenance.",
        "Ongoing maintenance relationships with several clients; zero missed deadlines across engagements.",
    ])

# ── Selected Projects ───────────────────────────────────────────────────────
story += section("SELECTED PROJECTS")

story += exp_entry(
    "K-Track \u2014 Tutor-Agency & Commission SaaS",
    "live: ktrack.vercel.app \u2014 freelance, Jun 2025",
    "React 19, Node.js/Express 5, TypeScript, MySQL/TiDB Serverless, Socket.IO, "
    "Cloudflare R2, Paystack",
    items=[
        "Live SaaS for commission-based tutor agencies processing real Visa card payments via "
        "Paystack with USD\u2192KES conversion; 94% payment collection rate across client billing.",
        "Security-hardened payments: HMAC-SHA256 timing-safe guest checkout URLs "
        "(crypto.timingSafeEqual), Paystack webhook verification against raw bytes, HttpOnly refresh "
        "cookies, scoped file authorization.",
        "Idempotent boot-time schema-patch service for TiDB Serverless; task pooling/claiming and "
        "real-time Socket.IO chat across superadmin/tutor/client roles.",
    ])

story += exp_entry(
    "DueSync \u2014 Task-Management PWA & MCP AI Server",
    "live: duesync.vercel.app \u2014 open source",
    "Next.js 15, TypeScript, Prisma, PostgreSQL, NextAuth v5, Upstash Redis, Vercel Cron",
    items=[
        "Ships a native Model Context Protocol server (stdio + Streamable HTTP) exposing 13 tools so "
        "AI agents can create, complete, and auto-schedule deep-work tasks.",
        "Two-way Google Calendar sync (OAuth 2.0, proactive token refresh), recurring tasks, Pomodoro "
        "mode, timezone-aware reminders, VAPID push; PWA + Android TWA.",
        "Hardened: RLS on all tables, strict CSP, Upstash Redis rate limiting, Zod validation; "
        "proactively patched CVE-2025-55182 / CVE-2025-66478 (Dec 2025 React/Next.js RSC RCE advisory).",
    ])

story += exp_entry(
    "Hiro \u2014 Self-Hosted Multi-Model AI Agent", "open source",
    "Node.js/TypeScript, AI SDK, PostgreSQL/SQLite, Pinecone, WhatsApp, Telegram",
    items=[
        "Multi-model agent mesh routing across Anthropic/OpenAI/Groq/Mistral/OpenRouter with parallel "
        "task execution and a dynamic self-improving skills system.",
        "Document ingestion (PDF/DOCX), web search, memory-backed conversations, voice I/O, and "
        "rich-output browser canvas across dual Telegram/WhatsApp interfaces.",
    ])

story += exp_entry(
    "MtaaKeys \u2014 Property Marketplace & Rental Management", "live: mtaakeys.com",
    "Next.js, Express 5, TypeScript, PostgreSQL/Prisma, Socket.IO, Paystack, "
    "Africa's Talking",
    items=[
        "Marketplace + rental management with 5 user roles and row-level security; dual Paystack "
        "systems (tiered agent subscriptions + pay-per-use listing Boosts) with node-cron lifecycle "
        "jobs for renewals and downgrades.",
        "Algorithmic featured-listing curation (view/inquiry scoring, recency decay); real-time "
        "Socket.IO messaging; Africa's Talking SMS + Resend email notifications.",
    ])

story += exp_entry(
    "wiktrack \u2014 M-Pesa Income Tracker (Android)",
    items=[
        "Expo/React Native app with a custom Kotlin module parsing incoming M-Pesa SMS into "
        "structured ledgers; local-first SQLite with background Supabase sync and FCM push.",
    ])
story.append(Paragraph(md(
    "**Also:** biashara-hub (Medusa.js v2 headless commerce with Daraja integration) \u2022 "
    "Votewatch (NestJS election-integrity platform, in active development)"), body_style))

# ── Education ───────────────────────────────────────────────────────────────
story += section("EDUCATION")
story += entry("BSc Software Development \u2014 KCA University",
               "Nairobi, Kenya | Sep 2021 \u2013 Expected July 2027")

# ── Certifications ──────────────────────────────────────────────────────────
story += section("CERTIFICATIONS")
for cert in [
    "Cybersecurity Fundamentals \u2014 IBM SkillsBuild (2025)",
    "Data Protection Basics \u2014 Atingi eLearning (2025)",
    "Zoho Creator Developer Certification \u2014 Zoho (2025)",
]:
    story.append(Paragraph(md(cert), bullet_style, bulletText="\u2022"))

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=1.5 * cm, rightMargin=1.5 * cm, topMargin=1.35 * cm, bottomMargin=1.35 * cm,
    title="Resume \u2014 Paul Karonji Waithaka \u2014 Full-Stack Software Engineer",
    author="Paul Karonji Waithaka",
    creator="Paul Karonji Waithaka",
    subject="Full-Stack Software Engineer resume \u2014 Nairobi, Kenya (remote-ready)",
)
doc.build(story)
print(f"Wrote {OUT}")
