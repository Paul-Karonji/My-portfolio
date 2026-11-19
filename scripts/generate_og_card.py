"""Generate the social share card (public/images/og-card.png, 1200x630).

Palette matches the portfolio's Tailwind theme (tailwind.config.ts). Re-run after
edits:  python scripts/generate_og_card.py
"""
import os

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "images", "og-card.png")

W, H = 1200, 630

# Theme palette (tailwind.config.ts)
CANVAS = (247, 247, 247)
SURFACE = (255, 255, 255)
PRIMARY = (17, 17, 17)
MUTED = (108, 113, 121)
HAIRLINE = (209, 211, 214)
VIOLET = (116, 48, 247)
VIOLET_LIGHT = (245, 242, 255)
GREEN = (0, 192, 71)

FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_REG = "C:/Windows/Fonts/segoeui.ttf"
FONT_SEMI = "C:/Windows/Fonts/segoeuisl.ttf"  # semilight (no semibold installed)


def font(path, size):
    return ImageFont.truetype(path, size)


img = Image.new("RGB", (W, H), CANVAS)

# ── Ambient blurred blobs (violet / green, very low alpha like the hero) ─────
blobs = Image.new("RGBA", (W, H), (0, 0, 0, 0))
blob_draw = ImageDraw.Draw(blobs)
blob_draw.ellipse([(-150, -180), (430, 260)], fill=VIOLET + (26,))
blob_draw.ellipse([(830, 380), (1400, 830)], fill=GREEN + (22,))
blob_draw.ellipse([(900, -120), (1300, 180)], fill=VIOLET + (18,))
blobs = blobs.filter(ImageFilter.GaussianBlur(90))
img = Image.alpha_composite(img.convert("RGBA"), blobs).convert("RGB")

draw = ImageDraw.Draw(img)

# ── Availability pill ────────────────────────────────────────────────────────
pill_font = font(FONT_SEMI, 20)
pill_text = "OPEN TO SENIOR / LEAD REMOTE ROLES"
tw = draw.textlength(pill_text, font=pill_font)
px, py = 72, 76
draw.rounded_rectangle(
    [(px, py), (px + tw + 74, py + 46)], radius=23, fill=SURFACE, outline=HAIRLINE, width=1
)
draw.ellipse([(px + 22, py + 18), (px + 38, py + 34)], fill=GREEN)
draw.text((px + 52, py + 12), pill_text, fill=PRIMARY, font=pill_font)

# ── Name & role ──────────────────────────────────────────────────────────────
draw.text((72, 168), "Paul Karonji Waithaka", fill=PRIMARY, font=font(FONT_BOLD, 76))
draw.text((72, 272), "Full-Stack Software Engineer", fill=VIOLET, font=font(FONT_BOLD, 38))
draw.text(
    (72, 336),
    "Shipping production systems with live users across payments, health, SaaS, and AI agents.",
    fill=MUTED,
    font=font(FONT_REG, 26),
)

# ── Metric chips ─────────────────────────────────────────────────────────────
chip_font = font(FONT_SEMI, 20)
chips = ["3 hospitals live", "94% payment collection", "10+ systems shipped", "KRA eTIMS · M-Pesa · MCP AI"]
cx, cy = 72, 430
for chip in chips:
    cw = draw.textlength(chip, font=chip_font)
    draw.rounded_rectangle(
        [(cx, cy), (cx + cw + 56, cy + 52)], radius=16, fill=SURFACE, outline=HAIRLINE, width=1
    )
    draw.ellipse([(cx + 18, cy + 22), (cx + 28, cy + 32)], fill=VIOLET)
    draw.text((cx + 38, cy + 14), chip, fill=PRIMARY, font=chip_font)
    cx += cw + 56 + 14

# ── Footer strip ─────────────────────────────────────────────────────────────
draw.line([(72, 546), (W - 72, 546)], fill=HAIRLINE, width=1)
draw.text((72, 566), "paulkaronji.netlify.app", fill=VIOLET, font=font(FONT_SEMI, 24))
foot_right = "github.com/Paul-Karonji  ·  Nairobi, Kenya (UTC+3)"
rw = draw.textlength(foot_right, font=font(FONT_REG, 22))
draw.text((W - 72 - rw, 568), foot_right, fill=MUTED, font=font(FONT_REG, 22))

os.makedirs(os.path.dirname(OUT), exist_ok=True)
img.save(OUT, "PNG", optimize=True)
print(f"Wrote {OUT} ({W}x{H})")
