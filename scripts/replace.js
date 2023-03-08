hexo.extend.filter.register('after_post_render', function (data) {
    // 图片路径替换
    const imgHost = "https://img.wdssmq.com/";
    const imgUrl = `https://img.wdssmq.com/${data.source.replace("doc.md", "")}`;
    data.content = data.content.replace(/<img src="\/\.\//g, `<img src="${imgHost}/_posts/`);
    data.content = data.content.replace(/<img src="\//g, `<img src="${imgUrl}`);
    return data;
});