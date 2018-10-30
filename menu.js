function selectionOnClick(info, tab) {
    window.open("https://mmrz.zhanglintc.co/dictionary?key_word=" + info.selectionText);
}

chrome.contextMenus.create({
    "title": "Search with Mmrz",
    "contexts": ["selection"],
    "onclick": selectionOnClick,
});

