function selectionOnClick(info, tab) {
    window.open("https://mmrz.zhanglintc.co/dictionary?key_word=" + info.selectionText);
}

chrome.contextMenus.create({
    "title": 'Mmrz search for "%s"',
    "contexts": ["selection"],
    "onclick": selectionOnClick,
});

