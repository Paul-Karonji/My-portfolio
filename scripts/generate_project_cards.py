import os
from PIL import Image, ImageDraw

os.makedirs(r"public\images\projects", exist_ok=True)

projects = [
    {
        "id": "wik-pos",
        "title": "WIK Cloud POS & eTIMS Fiscalization",
        "badge": "Fintech & Fiscal Compliance",
        "bg": (15, 23, 42),
        "accent": (16, 185, 129),
        "metric": "AES-256 KRA eTIMS · M-Pesa STK · Paystack SaaS",
        "diagram": ["NestJS 11 Core API", "KRA OSCU/VSCU Worker", "C2B Reconciliation Queue", "PostgreSQL Multi-Tenant"]
    },
    {
        "id": "fleettrack",
        "title": "FleetTrack Enterprise IoT Telematics",
        "badge": "High-Concurrency Systems",
        "bg": (9, 13, 22),
        "accent": (6, 182, 212),
        "metric": "Go Goroutines · WebSockets · Offline SQLite (Expo 57)",
        "diagram": ["Go Ingestion Pipeline", "WebSocket Real-Time Fanout", "SQLite Local Buffer", "QR Manifest Stoppage Engine"]
    },
    {
        "id": "duesync",
        "title": "DueSync AI & Native 13-Tool MCP Server",
        "badge": "Autonomous AI Agents",
        "bg": (20, 14, 38),
        "accent": (139, 92, 246),
        "metric": "Model Context Protocol · Google Calendar OAuth2 · Redis",
        "diagram": ["13-Tool MCP Server", "Upstash Redis Rate Limiting", "Bidirectional GCal Sync", "Autonomous AI Scheduling"]
    },
    {
        "id": "hotbill",
        "title": "HotBill KE Telecommunications Daemon",
        "badge": "Network Automation & ISP Billing",
        "bg": (24, 18, 12),
        "accent": (245, 158, 11),
        "metric": "MikroTik RouterOS (:8728) · M-Pesa STK · Next.js 14 NOC",
        "diagram": ["RouterOS Socket Daemon", "M-Pesa STK Instant Auth", "Dockerized NOC Console", "Bandwidth Quota Enforcer"]
    }
]

w, h = 800, 600

for p in projects:
    img = Image.new("RGB", (w, h), p["bg"])
    draw = ImageDraw.Draw(img)
    
    # Grid lines
    for x in range(0, w, 40):
        draw.line([(x, 0), (x, h)], fill=(30, 41, 59), width=1)
    for y in range(0, h, 40):
        draw.line([(0, y), (w, y)], fill=(30, 41, 59), width=1)
        
    # Header badge pill
    draw.rounded_rectangle([(40, 40), (320, 76)], radius=18, fill=p["accent"])
    draw.text((54, 48), p["badge"].upper(), fill=(255, 255, 255))
    
    # Title & Subtitle
    draw.text((40, 100), p["title"], fill=(255, 255, 255))
    draw.text((40, 126), p["metric"], fill=(148, 163, 184))
    
    # System node topology boxes
    box_w, box_h = 330, 65
    coords = [
        (40, 180), (430, 180),
        (40, 270), (430, 270)
    ]
    
    for (bx, by), label in zip(coords, p["diagram"]):
        draw.rounded_rectangle([(bx, by), (bx + box_w, by + box_h)], radius=14, fill=(30, 41, 59), outline=p["accent"], width=2)
        draw.ellipse([(bx + 16, by + 26), (bx + 28, by + 38)], fill=p["accent"])
        draw.text((bx + 42, by + 24), label, fill=(248, 250, 252))
        
    # Terminal telemetry box
    draw.rounded_rectangle([(40, 370), (760, 540)], radius=16, fill=(2, 6, 23), outline=(51, 65, 85), width=1)
    draw.ellipse([(60, 390), (70, 400)], fill=(239, 68, 68))
    draw.ellipse([(78, 390), (88, 400)], fill=(245, 158, 11))
    draw.ellipse([(96, 390), (106, 400)], fill=(16, 185, 129))
    draw.text((120, 386), "LIVE PRODUCTION TELEMETRY // HIGH AVAILABILITY", fill=(100, 116, 139))
    
    logs = [
        "✔ Ingestion worker online (0.04ms roundtrip)",
        "✔ Cryptographic signature verified & reconciled",
        "✔ ActiveSubscriptionGuard :: Invariant verified"
    ]
    for i, log in enumerate(logs):
        draw.text((60, 424 + (i * 32)), f"➜ {log}", fill=(226, 232, 240))
        
    target_id = p["id"]
    out_path = os.path.join(r"public\images\projects", f"{target_id}.webp")
    img.save(out_path, "WEBP", quality=95)
    print(f"Generated {out_path}")
