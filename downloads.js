const todayDownloads = await Download.count({
    userId: user.id,
    date: today
});

if (!user.isPremium && todayDownloads >= 1) {
    return res.status(403).json({
        message: "Daily download limit reached."
    });
}

app.get('/download/:videoId', async (req, res) => {
    const video = await Video.findById(req.params.videoId);

    res.download(video.path);
});

app.get('/my-downloads', async (req, res) => {
    const downloads = await Download.find({
        userId: req.user.id
    });

    res.json(downloads);
});