hexo.extend.filter.register('after_post_render', function(data) {
    // 图片路径替换
    const imgHost = "https://img.wdssmq.com/";
    const imgUrl = `https://img.wdssmq.com/${data.source.replace("doc.md", "")}`;
    data.content = data.content.replace(/<img src="\/\.\//g, `<img src="${imgHost}/_posts/`);
    data.content = data.content.replace(/<img src="\//g, `<img src="${imgUrl}`);
    data.content = data.excerpt + data.content;

    // let result = '';
    // for (let key in data) {
    //     if (data.hasOwnProperty(key)) {
    //         if (/raw|_content|content|more|excerpt/.test(key)) continue;
    //         result += key + ':' + data[key] + '\n\n';
    //     }
    // }

    // permalink 中替换 blog. 为 www. 
    const wwwLink = data.permalink.replace("blog.", "www.");
    data.content = `<blockquote><p>本文标题：《${data.title}》。</p><p>镜像链接：<a href="${wwwLink}" title="${data.title}">${wwwLink}</a></p></blockquote>\n\n` + data.content;

    return data;
});