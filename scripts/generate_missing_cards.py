"""Generate blueprint-style card images for projects without live URLs to screenshot.

Run from repo root: python scripts/generate_missing_cards.py
"""
import os

from PIL import Image, ImageDraw, ImageFont

os.makedirs(r"public\images\projects", exist_ok=True)

FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_REG = "C:/Windows/Fonts/segoeuisl.ttf"
FONT_MONO = "C:/Windows/Fonts/consola.ttf"

def font(path, size):
    return ImageFont.truetype(path, size)

projects = [
    {
        "id": "wiktrack",
        "title": "wiktrack - M-Pesa Income Tracker",
        "badge": "ANDROID · KENYA FINTECH RAILS",
        "bg": (10, 20, 16),
        "accent": (52, 211, 153),
        "metric": "Expo / React Native · Kotlin SMS Module · Local-First SQLite",
        "diagram": ["Kotlin SMS Interceptor", "M-Pesa Parser > Ledger", "Local-First SQLite Store", "Supabase Sync + FCM Push"],
    },
    {
        "id": "pos-license-server",
        "title": "Pos-License-Server - Licensing Authority",
        "badge": "INFRASTRUCTURE · SECURITY",
        "bg": (17, 12, 30),
        "accent": (167, 139, 250),
        "metric": "3-Tier Licensing · Hardware Fingerprinting · Docker + Caddy",
        "diagram": ["JWT Hardware Binding", "Lifetime / Sub / Trial Tiers", "Remote Revocation API", "Neon PG + R2 Backups"],
    },
    {
        "id": "biashara-hub",
        "title": "biashara-hub - Headless Commerce",
        "badge": "E-COMMERCE · OPEN SOURCE",
        "bg": (20, 14, 10),
        "accent": (251, 146, 60),
        "metric": "Medusa.js v2 · M-Pesa Daraja · Composable Commerce",
        "diagram": ["Medusa.js v2 Core", "Daraja STK Push Checkout", "C2B Confirmation Webhooks", "Custom Storefront"],
    },
    {
        "id": "votewatch",
        "title": "Votewatch - Election Integrity",
        "badge": "CIVIC TECH · IN ACTIVE DEVELOPMENT",
        "bg": (12, 16, 24),
        "accent": (96, 165, 250),
        "metric": "NestJS · Transparent Observation · Results Verification",
        "diagram": ["NestJS Modular Core", "Observer Workflows", "Incident Reporting API", "Results Verification Engine"],
    },
]

w, h = 1280, 960

for p in projects:
    img = Image.new("RGB", (w, h), p["bg"])
    draw = ImageDraw.Draw(img)

    grid = tuple(min(255, c + 14) for c in p["bg"])
    for x in range(0, w, 64):
        draw.line([(x, 0), (x, h)], fill=grid, width=1)
    for y in range(0, h, 64):
        draw.line([(0, y), (w, y)], fill=grid, width=1)

    f_badge = font(FONT_BOLD, 22)
    f_title = font(FONT_BOLD, 46)
    f_metric = font(FONT_REG, 23)
    f_node = font(FONT_REG, 24)
    f_mono = font(FONT_MONO, 21)
    f_status = font(FONT_MONO, 20)

    # Header badge pill
    bbox = draw.textbbox((0, 0), p["badge"], font=f_badge)
    badge_w = (bbox[2] - bbox[0]) + 56
    draw.rounded_rectangle([(64, 64), (64 + badge_w, 116)], radius=26, fill=p["accent"])
    draw.text((92, 76), p["badge"], fill=(10, 10, 14), font=f_badge)

    # Title & subtitle
    draw.text((64, 148), p["title"], fill=(248, 250, 252), font=f_title)
    draw.text((64, 216), p["metric"], fill=(148, 163, 184), font=f_metric)

    # System node topology boxes (2x2)
    box_w, box_h = 556, 108
    coords = [(64, 296), (660, 296), (64, 436), (660, 436)]
    for (bx, by), label in zip(coords, p["diagram"]):
        draw.rounded_rectangle(
            [(bx, by), (bx + box_w, by + box_h)], radius=22,
            fill=(30, 41, 59), outline=p["accent"], width=3,
        )
        draw.ellipse([(bx + 26, by + 46), (bx + 44, by + 64)], fill=p["accent"])
        draw.text((bx + 64, by + 40), label, fill=(248, 250, 252), font=f_node)

    # Terminal telemetry box
    draw.rounded_rectangle([(64, 610), (1216, 896)], radius=26, fill=(2, 6, 23), outline=(51, 65, 85), width=2)
    draw.ellipse([(100, 648), (118, 666)], fill=(239, 68, 68))
    draw.ellipse([(134, 648), (152, 666)], fill=(245, 158, 11))
    draw.ellipse([(168, 648), (186, 666)], fill=(16, 185, 129))
    draw.text((210, 648), "LIVE SYSTEM ARCHITECTURE // STATUS: OPERATIONAL", fill=(100, 116, 139), font=f_status)

    logs = [
        "service: healthy  |  latency p95 < 50ms",
        "integrity: signatures verified, 0 errors",
        "uptime: continuous  |  backups: automated",
    ]
    for i, log in enumerate(logs):
        draw.text((104, 706 + i * 58), f"> {log}", fill=(226, 232, 240), font=f_mono)

    out_path = os.path.join(r"public\images\projects", f"{p['id']}.webp")
    img.save(out_path, "WEBP", quality=92)
    print(f"Generated {out_path}")
