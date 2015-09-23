window.onload = function() {
    var r = Raphael("graph_canvas"),
        fin = function () {
            this.flag = r.popup(this.bar.x, this.bar.y, this.bar.value || "0").insertBefore(this);
        },
        fout = function () {
            this.flag.animate({opacity: 0}, 300, function () {this.remove();});
        },
        txtattr = { font: "12px sans-serif" };

    var graphWidth = 800;
    var graphHeight = 300;

    var viewMethod = "week";

    var dayData = [];
    var weekData = [];
    var monthData = [];
    var yearData = [];
    var bar1 = 0;
    var bar2 = 0;
    var bar3 = 0;
    var bar4 = 0;
    var bar5 = 0;
    var bar6 = 0;
    var bar7 = 0;
    var bar8 = 0;
    var bar9 = 0;
    var bar10 = 0;
    var bar11 = 0;

    refreshGraph();

    function refreshGraph() {
        r.clear();
        if (viewMethod == "day") {
            dayData = [2,4,1,4,6,7,2,1,1,2,6,8];
            r.text(380, 10, "Day").attr(txtattr);
            r.text(24, 300, "9a").attr(txtattr);
            r.text(48, 300, "10a").attr(txtattr);
            r.text(72, 300, "11a").attr(txtattr);
            r.text(96, 300, "12p").attr(txtattr);
            r.text(120, 300, "1p").attr(txtattr);
            r.text(144, 300, "2p").attr(txtattr);
            r.text(168, 300, "3p").attr(txtattr);
            r.text(194, 300, "4p").attr(txtattr);
            r.text(218, 300, "5p").attr(txtattr);
            r.text(240, 300, "6p").attr(txtattr);
            r.text(264, 300, "7p").attr(txtattr);
            r.text(288, 300, "8p").attr(txtattr);
            r.barchart(10, 10, graphWidth, graphHeight, [dayData], {colors:[["#006699"]]}).hover(fin, fout)
        } else if (viewMethod == "week") {
            weekData = [14,35,24,25,42,48,1];
            r.text(380, 10, "Week").attr(txtattr);
            r.text(33, 300, "Sun").attr(txtattr);
            r.text(75, 300, "Mon").attr(txtattr);
            r.text(116, 300, "Tues").attr(txtattr);
            r.text(156, 300, "Wed").attr(txtattr);
            r.text(198, 300, "Thurs").attr(txtattr);
            r.text(238, 300, "Fri").attr(txtattr);
            r.text(279, 300, "Sat").attr(txtattr);
            r.barchart(10, 10, graphWidth, graphHeight, [weekData], {colors:[["#006699"]]}).hover(fin, fout)
        } else if (viewMethod == "month") {
            monthData = [14,35,24,25,42,48,1];
            r.text(380, 10, "Month").attr(txtattr);
            r.text(33, 300, "Sun").attr(txtattr);
            r.text(75, 300, "Mon").attr(txtattr);
            r.text(116, 300, "Tues").attr(txtattr);
            r.text(156, 300, "Wed").attr(txtattr);
            r.text(198, 300, "Thurs").attr(txtattr);
            r.text(238, 300, "Fri").attr(txtattr);
            r.text(279, 300, "Sat").attr(txtattr);
            r.barchart(10, 10, graphWidth, graphHeight, [monthData], {colors:[["#006699"]]}).hover(fin, fout)
        } else if (viewMethod == "year") {
            yearData = [14,35,24,25,42,48,1];
            r.text(380, 10, "Year").attr(txtattr);
            r.text(33, 300, "Sun").attr(txtattr);
            r.text(75, 300, "Mon").attr(txtattr);
            r.text(116, 300, "Tues").attr(txtattr);
            r.text(156, 300, "Wed").attr(txtattr);
            r.text(198, 300, "Thurs").attr(txtattr);
            r.text(238, 300, "Fri").attr(txtattr);
            r.text(279, 300, "Sat").attr(txtattr);
            r.barchart(10, 10, graphWidth, graphHeight, [yearData], {colors:[["#006699"]]}).hover(fin, fout)
        }

            // background of the first button
        var buttonBox2 = r.rect(200, 400, 120, 50, 10).attr({
            fill: 'darkorange',
            stroke: '#3b4449',
            'stroke-width': 2
        });
        // text of the first button
        var text2 = r.text(buttonBox2.attrs.x + buttonBox2.attrs.width / 2, buttonBox2.attrs.y + buttonBox2.attrs.height / 2, 'Day').attr({
            "font-family": "Helvetica",
            "font-size": 16
        });
        // set of rectangle + text = button
        var button1 = r.set().attr({
            cursor: 'pointer'
        });
        button1.push(buttonBox2);
        button1.push(text2);
        button1.mouseover(function (event) {
            this.oGlow = buttonBox2.glow({
                opacity: 0.85,
                color: 'gray',
                width: 15
            });
        }).mouseout(function (event) {
            this.oGlow.remove();
        }).mouseup(function (e) {
            viewMethod = "day";
            refreshGraph();
        });



        var buttonBox2 = r.rect(400, 400, 120, 50, 10).attr({
            fill: 'blue',
            stroke: '#3b4449',
            'stroke-width': 2
        });
        // text of the first button
        var text2 = r.text(buttonBox2.attrs.x + buttonBox2.attrs.width / 2, buttonBox2.attrs.y + buttonBox2.attrs.height / 2, 'Week').attr({
            "font-family": "Helvetica",
            "font-size": 16
        });
        // set of rectangle + text = button
        var button1 = r.set().attr({
            cursor: 'pointer'
        });
        button1.push(buttonBox2);
        button1.push(text2);
        button1.mouseover(function (event) {
            this.oGlow = buttonBox2.glow({
                opacity: 0.85,
                color: 'gray',
                width: 15
            });
        }).mouseout(function (event) {
            this.oGlow.remove();
        }).mouseup(function (e) {
            viewMethod = "week";
            refreshGraph();
        });
    }
}
