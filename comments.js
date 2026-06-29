const allowedPattern = /^[a-zA-Z0-9\s.,!?]+$/;

function validateComment(comment) {
    return allowedPattern.test(comment);
}

app.post('/translate-comment', async (req, res) => {
    const { comment, targetLanguage } = req.body;

    const translatedText = await translateText(comment, targetLanguage);

    res.json({
        translatedComment: translatedText
    });
});

app.post('/comment/dislike/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id);

    comment.dislikes += 1;

    if (comment.dislikes >= 2) {
        await comment.deleteOne();

        return res.json({
            message: "Comment removed due to dislikes."
        });
    }

    await comment.save();

    res.json(comment);
});