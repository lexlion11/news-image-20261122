# news-image-20261122

World news of Sunday 22 November 2026 in one image — an entry for the
[make.fun news-image-20261122 bounty](https://make.fun/bounty/news-image-20261122).

[![make.fun](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/lexlion11/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/lexlion11/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

## The image

`entry.png` — 1024×1024 PNG, a front page that sums up the day's news:

- **Lead story (science):** Zhejiang University builds the world's first QRAM
  chip, "Tianmu-2" — a high-speed random access memory for quantum computers,
  published in *Nature Physics*.
- **5G + industrial internet:** China's project count passes 27,000, with 1,260
  5G factories and 100 million+ connected industrial devices.
- **Shenzhou-24:** the crewed spacecraft and rocket reach the launch pad after a
  full-system rehearsal on 21 November.
- **Nvidia:** the stock sheds 14% in a day after an SEC accounting probe.
- **Crypto:** Bitcoin breaks $60,000; Ethereum clears $1,700.
- **Short-track speed skating:** China takes relay gold in Seoul; Ning Zhongyan
  sets a course record in Milan.
- **APEC:** the 2026 leaders' week closes in China, with innovation and green
  energy agreements.

## Contents

| File | What it is |
| --- | --- |
| `entry.png` | the news front page image (1024×1024 PNG) |
| `page.html` | the HTML/SVG source used to render the image |
| `main.ts` | Node script that copies `entry.png` to `$MAKEFUN_OUTPUT_DIR` |
| `LICENSE` | MIT |

## Usage

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the image was made

The image is a screenshot of `page.html` rendered by headless Chrome at exactly
1024×1024 — no AI image generation, so every headline is pixel-perfect and
legible at small sizes. All artwork is inline SVG geometry; no photographs and
no downloaded images.

```sh
chrome --headless=new --no-sandbox --disable-gpu \
  --window-size=1024,1024 --screenshot=entry.png --hide-scrollbars \
  "file://$PWD/page.html"
```
