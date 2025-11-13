# Hero Background Video

## Add Your Video Here

Place your hero background video in this directory with the following names:
- `hero-background.mp4` (required)
- `hero-background.webm` (optional, for better browser support)

## Video Recommendations for Luxury Feel

### Technical Specs:
- **Resolution**: 1920x1080 (Full HD) or 3840x2160 (4K)
- **Format**: MP4 (H.264) and WebM (VP9) for best compatibility
- **Length**: 10-30 seconds (will loop seamlessly)
- **File Size**: Keep under 10MB for fast loading (compress if needed)
- **Aspect Ratio**: 16:9

### Content Suggestions:
- Slow, smooth camera movements through luxury kitchen
- Close-up details of cabinetry craftsmanship
- Natural light on wood grain and finishes
- Elegant aluminum door/window opening
- Showroom walkthrough footage
- Time-lapse of installation process

### Style Guidelines:
- **Slow motion**: 0.5x to 0.75x speed for elegance
- **Color grading**: Warm, neutral tones matching brand palette
- **Lighting**: Soft, natural light or warm interior lighting
- **Movement**: Slow pans, gentle dolly shots, smooth tracking
- **Avoid**: Quick cuts, jarring movements, busy scenes

### Free Stock Video Resources:
If you need placeholder video while creating custom content:
- **Pexels Videos**: https://www.pexels.com/videos/
- **Pixabay Videos**: https://pixabay.com/videos/
- **Coverr**: https://coverr.co/

Search terms: "luxury kitchen", "modern interior", "cabinet details", "wood craftsmanship"

### Compression Tools:
To reduce file size while maintaining quality:
- **HandBrake** (free): https://handbrake.fr/
- **FFmpeg** (command line)
- **Online tools**: CloudConvert, Clideo

### Example FFmpeg Command:
```bash
# Convert and compress video
ffmpeg -i input.mov -c:v libx264 -crf 23 -preset slow -vf scale=1920:1080 -c:a aac -b:a 128k hero-background.mp4

# Create WebM version
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -vf scale=1920:1080 -c:a libopus hero-background.webm
```

## Current Status:
Right now, the fallback image will show until you add your video file. The page is fully functional - just add your video when ready!

## Tips for Best Results:
1. **Film in landscape** (horizontal orientation)
2. **Use stabilization** or tripod for smooth footage
3. **Avoid text/logos** in the video (we overlay text)
4. **Consider motion**: Gentle movement adds life, but too much is distracting
5. **Test on mobile**: Ensure video works well on smaller screens
6. **Use a poster frame**: The first frame should look good as thumbnail

The current setup already has:
- Auto-play (muted for browser compatibility)
- Loop (seamless repeat)
- Fallback image if video doesn't load
- Responsive sizing
- Optimized performance
