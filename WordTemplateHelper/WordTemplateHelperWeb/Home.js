/// <reference path="/Scripts/FabricUI/MessageBanner.js" />


(function () {
    "use strict";

    var messageBanner;

    // 每次加载新页面时都必须运行初始化函数。
    Office.initialize = function (reason) {
        $(document).ready(function () {
            // 初始化 FabricUI 通知机制并隐藏
            var element = document.querySelector('.ms-MessageBanner');
            messageBanner = new fabric.MessageBanner(element);
            messageBanner.hideBanner();

            // 如果未使用 Word 2016，请使用回退逻辑。
            if (!Office.context.requirements.isSetSupported('WordApi', '1.1')) {
                $("#template-description").text("此示例显示选定的文本。");
                $('#button-text').text("显示!");
                $('#button-desc').text("显示选定的文本");
                
                $('#highlight-button').click(displaySelectedText);
                return;
            }

            $("#template-description").text("此示例突出显示文档中选定文本中的最长单词。");
            $('#button-text').text("突出显示!");
            $('#button-desc').text("突出显示最长单词。");
            
            loadSampleData();

            // 为突出显示按钮添加单击事件处理程序。
            $('#highlight-button').click(hightlightLongestWord);
        });
    };

    function loadSampleData() {
        // 针对 Word 对象模型运行批处理操作。
        Word.run(function (context) {
            // 为文档正文创建代理对象。
            var body = context.document.body;

            // 将清空正文内容的命令插入队列。
            body.clear();
            // 将在 Word 文档正文结束位置插入文本的命令插入队列。
            body.insertText(
                "This is a sample text inserted in the document",
                Word.InsertLocation.end);

            // 通过执行排队的命令来同步文档状态，并返回承诺以表示任务完成。
            return context.sync();
        })
        .catch(errorHandler);
    }

    function hightlightLongestWord() {
        Word.run(function (context) {
            // 将获取当前选定内容的命令插入队列，然后
            // 创建包含结果的代理范围对象。
            var range = context.document.getSelection();
            
            // 此变量将保存最长单词的搜索结果。
            var searchResults;
            
            // 将加载范围选择结果的命令插入队列。
            context.load(range, 'text');

            // 通过执行排队的命令来同步文档状态
            // 并返回承诺以表示任务完成。
            return context.sync()
                .then(function () {
                    // 获取选定内容中最长的单词。
                    var words = range.text.split(/\s+/);
                    var longestWord = words.reduce(function (word1, word2) { return word1.length > word2.length ? word1 : word2; });

                    // 将搜索命令排队。
                    searchResults = range.search(longestWord, { matchCase: true, matchWholeWord: true });

                    // 将加载结果的字体属性的命令插入队列。
                    context.load(searchResults, 'font');
                })
                .then(context.sync)
                .then(function () {
                    // 将突出显示搜索结果的命令插入队列。
                    searchResults.items[0].font.highlightColor = '#FFFF00'; // 黄色
                    searchResults.items[0].font.bold = true;
                })
                .then(context.sync);
        })
        .catch(errorHandler);
    } 


    function displaySelectedText() {
        Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
            function (result) {
                if (result.status === Office.AsyncResultStatus.Succeeded) {
                    showNotification('选定的文本为:', '"' + result.value + '"');
                } else {
                    showNotification('错误:', result.error.message);
                }
            });
    }

    //$$(Helper function for treating errors, $loc_script_taskpane_home_js_comment34$)$$
    function errorHandler(error) {
        // $$(Always be sure to catch any accumulated errors that bubble up from the Word.run execution., $loc_script_taskpane_home_js_comment35$)$$
        showNotification("错误:", error);
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    }

    // 用于显示通知的帮助程序函数
    function showNotification(header, content) {
        $("#notification-header").text(header);
        $("#notification-body").text(content);
        messageBanner.showBanner();
        messageBanner.toggleExpansion();
    }
})();
