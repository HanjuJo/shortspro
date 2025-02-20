import yt_dlp


def get_shorts_trends(keyword):
    """유튜브 숏츠 트렌드를 검색하여 상위 3개 영상을 반환합니다."""
    ydl_opts = {"quiet": True, "extract_flat": True, "force_generic_extractor": True}
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        search_results = ydl.extract_info(f"ytsearch3:{keyword} Shorts", download=False)

    videos = []
    if "entries" in search_results:
        for entry in search_results["entries"]:
            videos.append({
                "제목": entry["title"],
                "조회수": entry.get("view_count", 0),
                "영상_URL": entry["url"]
            })

    return videos
