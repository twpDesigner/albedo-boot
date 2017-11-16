optionMap.timeline1 = {
    "timeline": {
        "data": ["2002-01-01", "2003-01-01", "2004-01-01", "2005-01-01", "2006-01-01", "2007-01-01", "2008-01-01", "2009-01-01", "2010-01-01", "2011-01-01"],
        label: {
            formatter: function (s) {
                return s.slice(0, 4);
            }
        },
        autoPlay: true,
        "playInterval": 1000
    },
    "options": [
        {
            "color": ["#87cefa", "#ff7f50", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"],
            "title": {"subtext": "数据来自国家统计局", "text": "2002全国宏观经济指标"},
            "tooltip": {"trigger": "axis"},
            "legend": {
                x: 'right',
                "data": ["GDP", "金融", "房地产", "第一产业", "第二产业", "第三产业"],
                "selected": {"GDP": true, "金融": false, "房地产": true, "第一产业": false, "第二产业": false, "第三产业": false}
            },
            "toolbox": {
                "show": true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                "feature": {
                    "mark": {"show": true},
                    "dataView": {"show": true, "readOnly": false},
                    "magicType": {"show": true, "type": ["line", "bar", "stack", "tiled"]},
                    "restore": {"show": true},
                    "saveAsImage": {"show": true}
                }
            },
            "calculable": true,
            "grid": {"y": 80, "y2": 100},
            "xAxis": [{
                "type": "category",
                "axisLabel": {"interval": 0},
                "data": ["北京", "\n天津", "河北", "\n山西", "内蒙古", "\n辽宁", "吉林", "\n黑龙江", "上海", "\n江苏", "浙江", "\n安徽", "福建", "\n江西", "山东", "\n河南", "湖北", "\n湖南", "广东", "\n广西", "海南", "\n重庆", "四川", "\n贵州", "云南", "\n西藏", "陕西", "\n甘肃", "青海", "\n宁夏", "新疆"]
            }],
            "yAxis": [{
                "type": "value",
                "name": "GDP（亿元）",
                "max": 53500,
                "splitArea": {"show": true},
                splitNumber: 5
            }, {"type": "value", "name": "其他（亿元）", "splitArea": {"show": true}, splitNumber: 5}],
            "series": [{
                "name": "GDP",
                "_name": "GDP",
                "type": "bar",
                "markLine": {
                    symbol: ['arrow', 'none'],
                    symbolSize: [4, 2],
                    itemStyle: {
                        normal: {
                            lineStyle: {color: 'orange'},
                            borderColor: 'orange',
                            label: {
                                position: 'left', formatter: function (a, b, c) {
                                    return Math.round(c)
                                }, textStyle: {color: "orange"}
                            }
                        }
                    },
                    "data": [{"type": "average", "name": "平均值"}]
                },
                "data": [{"name": "北京", "value": 4315}, {"name": "天津", "value": 2150.76}, {
                    "name": "河北",
                    "value": 6018.28
                }, {"name": "山西", "value": 2324.8}, {"name": "内蒙古", "value": 1940.94}, {
                    "name": "辽宁",
                    "value": 5458.22
                }, {"name": "吉林", "value": 2348.54}, {"name": "黑龙江", "value": 3637.2}, {
                    "name": "上海",
                    "value": 5741.03
                }, {"name": "江苏", "value": 10606.85}, {"name": "浙江", "value": 8003.67}, {
                    "name": "安徽",
                    "value": 3519.72
                }, {"name": "福建", "value": 4467.55}, {"name": "江西", "value": 2450.48}, {
                    "name": "山东",
                    "value": 10275.5
                }, {"name": "河南", "value": 6035.48}, {"name": "湖北", "value": 4212.82}, {
                    "name": "湖南",
                    "value": 4151.54
                }, {"name": "广东", "value": 13502.42}, {"name": "广西", "value": 2523.73}, {
                    "name": "海南",
                    "value": 642.73
                }, {"name": "重庆", "value": 2232.86}, {"name": "四川", "value": 4725.01}, {
                    "name": "贵州",
                    "value": 1243.43
                }, {"name": "云南", "value": 2312.82}, {"name": "西藏", "value": 162.04}, {
                    "name": "陕西",
                    "value": 2253.39
                }, {"name": "甘肃", "value": 1232.03}, {"name": "青海", "value": 340.65}, {
                    "name": "宁夏",
                    "value": 377.16
                }, {"name": "新疆", "value": 1612.6}]
            }, {
                "name": "金融",
                "_name": "Financial",
                "yAxisIndex": 1,
                "type": "bar",
                "data": [{"name": "北京", "value": 561.91}, {"name": "天津", "value": 76.86}, {
                    "name": "河北",
                    "value": 179.6
                }, {"name": "山西", "value": 124.1}, {"name": "内蒙古", "value": 48.39}, {
                    "name": "辽宁",
                    "value": 137.18
                }, {"name": "吉林", "value": 75.45}, {"name": "黑龙江", "value": 31.6}, {
                    "name": "上海",
                    "value": 485.25
                }, {"name": "江苏", "value": 368.86}, {"name": "浙江", "value": 347.53}, {
                    "name": "安徽",
                    "value": 81.85
                }, {"name": "福建", "value": 138.28}, {"name": "江西", "value": 76.51}, {
                    "name": "山东",
                    "value": 310.07
                }, {"name": "河南", "value": 158.77}, {"name": "湖北", "value": 96.95}, {
                    "name": "湖南",
                    "value": 92.43
                }, {"name": "广东", "value": 454.65}, {"name": "广西", "value": 35.86}, {
                    "name": "海南",
                    "value": 10.08
                }, {"name": "重庆", "value": 134.52}, {"name": "四川", "value": 183.13}, {
                    "name": "贵州",
                    "value": 41.45
                }, {"name": "云南", "value": 102.39}, {"name": "西藏", "value": 2.81}, {
                    "name": "陕西",
                    "value": 67.3
                }, {"name": "甘肃", "value": 42.08}, {"name": "青海", "value": 16.75}, {
                    "name": "宁夏",
                    "value": 21.45
                }, {"name": "新疆", "value": 52.18}]
            }, {
                "name": "房地产",
                "_name": "Estate",
                "yAxisIndex": 1,
                "type": "bar",
                "data": [{"name": "北京", "value": 298.02}, {"name": "天津", "value": 73.04}, {
                    "name": "河北",
                    "value": 140.89
                }, {"name": "山西", "value": 65.83}, {"name": "内蒙古", "value": 51.48}, {
                    "name": "辽宁",
                    "value": 130.94
                }, {"name": "吉林", "value": 76.11}, {"name": "黑龙江", "value": 118.7}, {
                    "name": "上海",
                    "value": 384.86
                }, {"name": "江苏", "value": 371.09}, {"name": "浙江", "value": 360.63}, {
                    "name": "安徽",
                    "value": 139.18
                }, {"name": "福建", "value": 188.09}, {"name": "江西", "value": 125.27}, {
                    "name": "山东",
                    "value": 371.13
                }, {"name": "河南", "value": 199.31}, {"name": "湖北", "value": 145.17}, {
                    "name": "湖南",
                    "value": 165.29
                }, {"name": "广东", "value": 808.16}, {"name": "广西", "value": 82.83}, {
                    "name": "海南",
                    "value": 21.45
                }, {"name": "重庆", "value": 90.48}, {"name": "四川", "value": 210.82}, {
                    "name": "贵州",
                    "value": 53.49
                }, {"name": "云南", "value": 95.68}, {"name": "西藏", "value": 3.42}, {
                    "name": "陕西",
                    "value": 77.68
                }, {"name": "甘肃", "value": 41.52}, {"name": "青海", "value": 9.74}, {
                    "name": "宁夏",
                    "value": 13.46
                }, {"name": "新疆", "value": 43.04}]
            }, {
                "name": "第一产业",
                "_name": "PI",
                "yAxisIndex": 1,
                "type": "bar",
                "data": [{"name": "北京", "value": 82.44}, {"name": "天津", "value": 84.21}, {
                    "name": "河北",
                    "value": 956.84
                }, {"name": "山西", "value": 197.8}, {"name": "内蒙古", "value": 374.69}, {
                    "name": "辽宁",
                    "value": 590.2
                }, {"name": "吉林", "value": 446.17}, {"name": "黑龙江", "value": 474.2}, {
                    "name": "上海",
                    "value": 79.68
                }, {"name": "江苏", "value": 1110.44}, {"name": "浙江", "value": 685.2}, {
                    "name": "安徽",
                    "value": 783.66
                }, {"name": "福建", "value": 664.78}, {"name": "江西", "value": 535.98}, {
                    "name": "山东",
                    "value": 1390
                }, {"name": "河南", "value": 1288.36}, {"name": "湖北", "value": 707}, {
                    "name": "湖南",
                    "value": 847.25
                }, {"name": "广东", "value": 1015.08}, {"name": "广西", "value": 601.99}, {
                    "name": "海南",
                    "value": 222.89
                }, {"name": "重庆", "value": 317.87}, {"name": "四川", "value": 1047.95}, {
                    "name": "贵州",
                    "value": 281.1
                }, {"name": "云南", "value": 463.44}, {"name": "西藏", "value": 39.75}, {
                    "name": "陕西",
                    "value": 282.21
                }, {"name": "甘肃", "value": 215.51}, {"name": "青海", "value": 47.31}, {
                    "name": "宁夏",
                    "value": 52.95
                }, {"name": "新疆", "value": 305}]
            }, {
                "name": "第二产业",
                "_name": "SI",
                "yAxisIndex": 1,
                "type": "bar",
                "data": [{"name": "北京", "value": 1249.99}, {"name": "天津", "value": 1069.08}, {
                    "name": "河北",
                    "value": 2911.69
                }, {"name": "山西", "value": 1134.31}, {"name": "内蒙古", "value": 754.78}, {
                    "name": "辽宁",
                    "value": 2609.85
                }, {"name": "吉林", "value": 943.49}, {"name": "黑龙江", "value": 1843.6}, {
                    "name": "上海",
                    "value": 2622.45
                }, {"name": "江苏", "value": 5604.49}, {"name": "浙江", "value": 4090.48}, {
                    "name": "安徽",
                    "value": 1337.04
                }, {"name": "福建", "value": 2036.97}, {"name": "江西", "value": 941.77}, {
                    "name": "山东",
                    "value": 5184.98
                }, {"name": "河南", "value": 2768.75}, {"name": "湖北", "value": 1709.89}, {
                    "name": "湖南",
                    "value": 1523.5
                }, {"name": "广东", "value": 6143.4}, {"name": "广西", "value": 846.89}, {
                    "name": "海南",
                    "value": 148.88
                }, {"name": "重庆", "value": 958.87}, {"name": "四川", "value": 1733.38}, {
                    "name": "贵州",
                    "value": 481.96
                }, {"name": "云南", "value": 934.88}, {"name": "西藏", "value": 32.72}, {
                    "name": "陕西",
                    "value": 1007.56
                }, {"name": "甘肃", "value": 501.69}, {"name": "青海", "value": 144.51}, {
                    "name": "宁夏",
                    "value": 153.06
                }, {"name": "新疆", "value": 603.15}]
            }, {
                "name": "第三产业",
                "_name": "TI",
                "yAxisIndex": 1,
                "type": "bar",
                "data": [{"name": "北京", "value": 2982.57}, {"name": "天津", "value": 997.47}, {
                    "name": "河北",
                    "value": 2149.75
                }, {"name": "山西", "value": 992.69}, {"name": "内蒙古", "value": 811.47}, {
                    "name": "辽宁",
                    "value": 2258.17
                }, {"name": "吉林", "value": 958.88}, {"name": "黑龙江", "value": 1319.4}, {
                    "name": "上海",
                    "value": 3038.9
                }, {"name": "江苏", "value": 3891.92}, {"name": "浙江", "value": 3227.99}, {
                    "name": "安徽",
                    "value": 1399.02
                }, {"name": "福建", "value": 1765.8}, {"name": "江西", "value": 972.73}, {
                    "name": "山东",
                    "value": 3700.52
                }, {"name": "河南", "value": 1978.37}, {"name": "湖北", "value": 1795.93}, {
                    "name": "湖南",
                    "value": 1780.79
                }, {"name": "广东", "value": 6343.94}, {"name": "广西", "value": 1074.85}, {
                    "name": "海南",
                    "value": 270.96
                }, {"name": "重庆", "value": 956.12}, {"name": "四川", "value": 1943.68}, {
                    "name": "贵州",
                    "value": 480.37
                }, {"name": "云南", "value": 914.5}, {"name": "西藏", "value": 89.56}, {
                    "name": "陕西",
                    "value": 963.62
                }, {"name": "甘肃", "value": 514.83}, {"name": "青海", "value": 148.83}, {
                    "name": "宁夏",
                    "value": 171.14
                }, {"name": "新疆", "value": 704.5}]
            }]
        },
        {
            "title": {"text": "2003全国宏观经济指标"},
            "series": [{
                "name": "GDP",
                "_name": "GDP",
                "data": [{"name": "北京", "value": 5007.21}, {"name": "天津", "value": 2578.03}, {
                    "name": "河北",
                    "value": 6921.29
                }, {"name": "山西", "value": 2855.23}, {"name": "内蒙古", "value": 2388.38}, {
                    "name": "辽宁",
                    "value": 6002.54
                }, {"name": "吉林", "value": 2662.08}, {"name": "黑龙江", "value": 4057.4}, {
                    "name": "上海",
                    "value": 6694.23
                }, {"name": "江苏", "value": 12442.87}, {"name": "浙江", "value": 9705.02}, {
                    "name": "安徽",
                    "value": 3923.11
                }, {"name": "福建", "value": 4983.67}, {"name": "江西", "value": 2807.41}, {
                    "name": "山东",
                    "value": 12078.15
                }, {"name": "河南", "value": 6867.7}, {"name": "湖北", "value": 4757.45}, {
                    "name": "湖南",
                    "value": 4659.99
                }, {"name": "广东", "value": 15844.64}, {"name": "广西", "value": 2821.11}, {
                    "name": "海南",
                    "value": 713.96
                }, {"name": "重庆", "value": 2555.72}, {"name": "四川", "value": 5333.09}, {
                    "name": "贵州",
                    "value": 1426.34
                }, {"name": "云南", "value": 2556.02}, {"name": "西藏", "value": 185.09}, {
                    "name": "陕西",
                    "value": 2587.72
                }, {"name": "甘肃", "value": 1399.83}, {"name": "青海", "value": 390.2}, {
                    "name": "宁夏",
                    "value": 445.36
                }, {"name": "新疆", "value": 1886.35}]
            }, {
                "name": "金融",
                "_name": "Financial",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 635.56}, {"name": "天津", "value": 112.79}, {
                    "name": "河北",
                    "value": 199.87
                }, {"name": "山西", "value": 118.48}, {"name": "内蒙古", "value": 55.89}, {
                    "name": "辽宁",
                    "value": 145.38
                }, {"name": "吉林", "value": 73.15}, {"name": "黑龙江", "value": 32.2}, {
                    "name": "上海",
                    "value": 517.97
                }, {"name": "江苏", "value": 392.11}, {"name": "浙江", "value": 451.54}, {
                    "name": "安徽",
                    "value": 87.45
                }, {"name": "福建", "value": 150.09}, {"name": "江西", "value": 64.31}, {
                    "name": "山东",
                    "value": 329.71
                }, {"name": "河南", "value": 165.11}, {"name": "湖北", "value": 107.31}, {
                    "name": "湖南",
                    "value": 99.35
                }, {"name": "广东", "value": 534.28}, {"name": "广西", "value": 61.59}, {
                    "name": "海南",
                    "value": 10.68
                }, {"name": "重庆", "value": 147.04}, {"name": "四川", "value": 206.24}, {
                    "name": "贵州",
                    "value": 48.01
                }, {"name": "云南", "value": 105.48}, {"name": "西藏", "value": 4.74}, {
                    "name": "陕西",
                    "value": 77.87
                }, {"name": "甘肃", "value": 42.31}, {"name": "青海", "value": 17.98}, {
                    "name": "宁夏",
                    "value": 24.8
                }, {"name": "新疆", "value": 64.92}]
            }, {
                "name": "房地产",
                "_name": "Estate",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 341.88}, {"name": "天津", "value": 92.31}, {
                    "name": "河北",
                    "value": 185.19
                }, {"name": "山西", "value": 78.73}, {"name": "内蒙古", "value": 61.05}, {
                    "name": "辽宁",
                    "value": 188.49
                }, {"name": "吉林", "value": 91.99}, {"name": "黑龙江", "value": 127.2}, {
                    "name": "上海",
                    "value": 487.82
                }, {"name": "江苏", "value": 447.47}, {"name": "浙江", "value": 473.16}, {
                    "name": "安徽",
                    "value": 162.63
                }, {"name": "福建", "value": 215.84}, {"name": "江西", "value": 138.02}, {
                    "name": "山东",
                    "value": 418.21
                }, {"name": "河南", "value": 217.58}, {"name": "湖北", "value": 176.8}, {
                    "name": "湖南",
                    "value": 186.49
                }, {"name": "广东", "value": 955.66}, {"name": "广西", "value": 100.93}, {
                    "name": "海南",
                    "value": 25.14
                }, {"name": "重庆", "value": 113.69}, {"name": "四川", "value": 231.72}, {
                    "name": "贵州",
                    "value": 59.86
                }, {"name": "云南", "value": 103.79}, {"name": "西藏", "value": 4.35}, {
                    "name": "陕西",
                    "value": 83.9
                }, {"name": "甘肃", "value": 48.09}, {"name": "青海", "value": 11.41}, {
                    "name": "宁夏",
                    "value": 16.85
                }, {"name": "新疆", "value": 47.84}]
            }, {
                "name": "第一产业",
                "_name": "PI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 84.11}, {"name": "天津", "value": 89.91}, {
                    "name": "河北",
                    "value": 1064.05
                }, {"name": "山西", "value": 215.19}, {"name": "内蒙古", "value": 420.1}, {
                    "name": "辽宁",
                    "value": 615.8
                }, {"name": "吉林", "value": 488.23}, {"name": "黑龙江", "value": 504.8}, {
                    "name": "上海",
                    "value": 81.02
                }, {"name": "江苏", "value": 1162.45}, {"name": "浙江", "value": 717.85}, {
                    "name": "安徽",
                    "value": 749.4
                }, {"name": "福建", "value": 692.94}, {"name": "江西", "value": 560}, {
                    "name": "山东",
                    "value": 1480.67
                }, {"name": "河南", "value": 1198.7}, {"name": "湖北", "value": 798.35}, {
                    "name": "湖南",
                    "value": 886.47
                }, {"name": "广东", "value": 1072.91}, {"name": "广西", "value": 658.78}, {
                    "name": "海南",
                    "value": 244.29
                }, {"name": "重庆", "value": 339.06}, {"name": "四川", "value": 1128.61}, {
                    "name": "贵州",
                    "value": 298.69
                }, {"name": "云南", "value": 494.6}, {"name": "西藏", "value": 40.7}, {
                    "name": "陕西",
                    "value": 302.66
                }, {"name": "甘肃", "value": 237.91}, {"name": "青海", "value": 48.47}, {
                    "name": "宁夏",
                    "value": 55.63
                }, {"name": "新疆", "value": 412.9}]
            }, {
                "name": "第二产业",
                "_name": "SI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 1487.15}, {"name": "天津", "value": 1337.31}, {
                    "name": "河北",
                    "value": 3417.56
                }, {"name": "山西", "value": 1463.38}, {"name": "内蒙古", "value": 967.49}, {
                    "name": "辽宁",
                    "value": 2898.89
                }, {"name": "吉林", "value": 1098.37}, {"name": "黑龙江", "value": 2084.7}, {
                    "name": "上海",
                    "value": 3209.02
                }, {"name": "江苏", "value": 6787.11}, {"name": "浙江", "value": 5096.38}, {
                    "name": "安徽",
                    "value": 1535.29
                }, {"name": "福建", "value": 2340.82}, {"name": "江西", "value": 1204.33}, {
                    "name": "山东",
                    "value": 6485.05
                }, {"name": "河南", "value": 3310.14}, {"name": "湖北", "value": 1956.02}, {
                    "name": "湖南",
                    "value": 1777.74
                }, {"name": "广东", "value": 7592.78}, {"name": "广西", "value": 984.08}, {
                    "name": "海南",
                    "value": 175.82
                }, {"name": "重庆", "value": 1135.31}, {"name": "四川", "value": 2014.8}, {
                    "name": "贵州",
                    "value": 569.37
                }, {"name": "云南", "value": 1047.66}, {"name": "西藏", "value": 47.64}, {
                    "name": "陕西",
                    "value": 1221.17
                }, {"name": "甘肃", "value": 572.02}, {"name": "青海", "value": 171.92}, {
                    "name": "宁夏",
                    "value": 194.27
                }, {"name": "新疆", "value": 719.54}]
            }, {
                "name": "第三产业",
                "_name": "TI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 3435.95}, {"name": "天津", "value": 1150.81}, {
                    "name": "河北",
                    "value": 2439.68
                }, {"name": "山西", "value": 1176.65}, {"name": "内蒙古", "value": 1000.79}, {
                    "name": "辽宁",
                    "value": 2487.85
                }, {"name": "吉林", "value": 1075.48}, {"name": "黑龙江", "value": 1467.9}, {
                    "name": "上海",
                    "value": 3404.19
                }, {"name": "江苏", "value": 4493.31}, {"name": "浙江", "value": 3890.79}, {
                    "name": "安徽",
                    "value": 1638.42
                }, {"name": "福建", "value": 1949.91}, {"name": "江西", "value": 1043.08}, {
                    "name": "山东",
                    "value": 4112.43
                }, {"name": "河南", "value": 2358.86}, {"name": "湖北", "value": 2003.08}, {
                    "name": "湖南",
                    "value": 1995.78
                }, {"name": "广东", "value": 7178.94}, {"name": "广西", "value": 1178.25}, {
                    "name": "海南",
                    "value": 293.85
                }, {"name": "重庆", "value": 1081.35}, {"name": "四川", "value": 2189.68}, {
                    "name": "贵州",
                    "value": 558.28
                }, {"name": "云南", "value": 1013.76}, {"name": "西藏", "value": 96.76}, {
                    "name": "陕西",
                    "value": 1063.89
                }, {"name": "甘肃", "value": 589.91}, {"name": "青海", "value": 169.81}, {
                    "name": "宁夏",
                    "value": 195.46
                }, {"name": "新疆", "value": 753.91}]
            }]
        }, {
            "title": {"text": "2004全国宏观经济指标"},
            "series": [{
                "name": "GDP",
                "_name": "GDP",
                "data": [{"name": "北京", "value": 6033.21}, {"name": "天津", "value": 3110.97}, {
                    "name": "河北",
                    "value": 8477.63
                }, {"name": "山西", "value": 3571.37}, {"name": "内蒙古", "value": 3041.07}, {
                    "name": "辽宁",
                    "value": 6672
                }, {"name": "吉林", "value": 3122.01}, {"name": "黑龙江", "value": 4750.6}, {
                    "name": "上海",
                    "value": 8072.83
                }, {"name": "江苏", "value": 15003.6}, {"name": "浙江", "value": 11648.7}, {
                    "name": "安徽",
                    "value": 4759.3
                }, {"name": "福建", "value": 5763.35}, {"name": "江西", "value": 3456.7}, {
                    "name": "山东",
                    "value": 15021.84
                }, {"name": "河南", "value": 8553.79}, {"name": "湖北", "value": 5633.24}, {
                    "name": "湖南",
                    "value": 5641.94
                }, {"name": "广东", "value": 18864.62}, {"name": "广西", "value": 3433.5}, {
                    "name": "海南",
                    "value": 819.66
                }, {"name": "重庆", "value": 3034.58}, {"name": "四川", "value": 6379.63}, {
                    "name": "贵州",
                    "value": 1677.8
                }, {"name": "云南", "value": 3081.91}, {"name": "西藏", "value": 220.34}, {
                    "name": "陕西",
                    "value": 3175.58
                }, {"name": "甘肃", "value": 1688.49}, {"name": "青海", "value": 466.1}, {
                    "name": "宁夏",
                    "value": 537.11
                }, {"name": "新疆", "value": 2209.09}]
            }, {
                "name": "金融",
                "_name": "Financial",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 713.79}, {"name": "天津", "value": 136.97}, {
                    "name": "河北",
                    "value": 209.1
                }, {"name": "山西", "value": 110.29}, {"name": "内蒙古", "value": 55.89}, {
                    "name": "辽宁",
                    "value": 188.04
                }, {"name": "吉林", "value": 77.17}, {"name": "黑龙江", "value": 32.2}, {
                    "name": "上海",
                    "value": 612.45
                }, {"name": "江苏", "value": 440.5}, {"name": "浙江", "value": 523.49}, {
                    "name": "安徽",
                    "value": 94.1
                }, {"name": "福建", "value": 171}, {"name": "江西", "value": 65.1}, {
                    "name": "山东",
                    "value": 343.37
                }, {"name": "河南", "value": 170.82}, {"name": "湖北", "value": 118.85}, {
                    "name": "湖南",
                    "value": 118.64
                }, {"name": "广东", "value": 602.68}, {"name": "广西", "value": 74}, {
                    "name": "海南",
                    "value": 11.56
                }, {"name": "重庆", "value": 162.38}, {"name": "四川", "value": 236.5}, {
                    "name": "贵州",
                    "value": 60.3
                }, {"name": "云南", "value": 118.4}, {"name": "西藏", "value": 5.4}, {
                    "name": "陕西",
                    "value": 90.1
                }, {"name": "甘肃", "value": 42.99}, {"name": "青海", "value": 19}, {
                    "name": "宁夏",
                    "value": 27.92
                }, {"name": "新疆", "value": 70.3}]
            }, {
                "name": "房地产",
                "_name": "Estate",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 436.11}, {"name": "天津", "value": 106.14}, {
                    "name": "河北",
                    "value": 231.08
                }, {"name": "山西", "value": 95.1}, {"name": "内蒙古", "value": 73.81}, {
                    "name": "辽宁",
                    "value": 203.1
                }, {"name": "吉林", "value": 97.93}, {"name": "黑龙江", "value": 137.74}, {
                    "name": "上海",
                    "value": 666.3
                }, {"name": "江苏", "value": 534.17}, {"name": "浙江", "value": 587.83}, {
                    "name": "安徽",
                    "value": 188.28
                }, {"name": "福建", "value": 248.44}, {"name": "江西", "value": 167.2}, {
                    "name": "山东",
                    "value": 473.27
                }, {"name": "河南", "value": 236.44}, {"name": "湖北", "value": 204.8}, {
                    "name": "湖南",
                    "value": 191.5
                }, {"name": "广东", "value": 1103.75}, {"name": "广西", "value": 122.52}, {
                    "name": "海南",
                    "value": 30.64
                }, {"name": "重庆", "value": 129.12}, {"name": "四川", "value": 264.3}, {
                    "name": "贵州",
                    "value": 68.3
                }, {"name": "云南", "value": 116.54}, {"name": "西藏", "value": 5.8}, {
                    "name": "陕西",
                    "value": 95.9
                }, {"name": "甘肃", "value": 56.84}, {"name": "青海", "value": 13}, {
                    "name": "宁夏",
                    "value": 20.78
                }, {"name": "新疆", "value": 53.55}]
            }, {
                "name": "第一产业",
                "_name": "PI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 87.36}, {"name": "天津", "value": 105.28}, {
                    "name": "河北",
                    "value": 1370.43
                }, {"name": "山西", "value": 276.3}, {"name": "内蒙古", "value": 522.8}, {
                    "name": "辽宁",
                    "value": 798.43
                }, {"name": "吉林", "value": 568.69}, {"name": "黑龙江", "value": 605.79}, {
                    "name": "上海",
                    "value": 83.45
                }, {"name": "江苏", "value": 1367.58}, {"name": "浙江", "value": 814.1}, {
                    "name": "安徽",
                    "value": 950.5
                }, {"name": "福建", "value": 786.84}, {"name": "江西", "value": 664.5}, {
                    "name": "山东",
                    "value": 1778.45
                }, {"name": "河南", "value": 1649.29}, {"name": "湖北", "value": 1020.09}, {
                    "name": "湖南",
                    "value": 1022.45
                }, {"name": "广东", "value": 1248.59}, {"name": "广西", "value": 817.88}, {
                    "name": "海南",
                    "value": 278.76
                }, {"name": "重庆", "value": 428.05}, {"name": "四川", "value": 1379.93}, {
                    "name": "贵州",
                    "value": 334.5
                }, {"name": "云南", "value": 607.75}, {"name": "西藏", "value": 44.3}, {
                    "name": "陕西",
                    "value": 387.88
                }, {"name": "甘肃", "value": 286.78}, {"name": "青海", "value": 60.7}, {
                    "name": "宁夏",
                    "value": 65.33
                }, {"name": "新疆", "value": 461.26}]
            }, {
                "name": "第二产业",
                "_name": "SI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 1853.58}, {"name": "天津", "value": 1685.93}, {
                    "name": "河北",
                    "value": 4301.73
                }, {"name": "山西", "value": 1919.4}, {"name": "内蒙古", "value": 1248.27}, {
                    "name": "辽宁",
                    "value": 3061.62
                }, {"name": "吉林", "value": 1329.68}, {"name": "黑龙江", "value": 2487.04}, {
                    "name": "上海",
                    "value": 3892.12
                }, {"name": "江苏", "value": 8437.99}, {"name": "浙江", "value": 6250.38}, {
                    "name": "安徽",
                    "value": 1844.9
                }, {"name": "福建", "value": 2770.49}, {"name": "江西", "value": 1566.4}, {
                    "name": "山东",
                    "value": 8478.69
                }, {"name": "河南", "value": 4182.1}, {"name": "湖北", "value": 2320.6}, {
                    "name": "湖南",
                    "value": 2190.54
                }, {"name": "广东", "value": 9280.73}, {"name": "广西", "value": 1253.7}, {
                    "name": "海南",
                    "value": 205.6
                }, {"name": "重庆", "value": 1376.91}, {"name": "四川", "value": 2489.4}, {
                    "name": "贵州",
                    "value": 681.5
                }, {"name": "云南", "value": 1281.63}, {"name": "西藏", "value": 52.74}, {
                    "name": "陕西",
                    "value": 1553.1
                }, {"name": "甘肃", "value": 713.3}, {"name": "青海", "value": 211.7}, {
                    "name": "宁夏",
                    "value": 244.05
                }, {"name": "新疆", "value": 914.47}]
            }, {
                "name": "第三产业",
                "_name": "TI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 4092.27}, {"name": "天津", "value": 1319.76}, {
                    "name": "河北",
                    "value": 2805.47
                }, {"name": "山西", "value": 1375.67}, {"name": "内蒙古", "value": 1270}, {
                    "name": "辽宁",
                    "value": 2811.95
                }, {"name": "吉林", "value": 1223.64}, {"name": "黑龙江", "value": 1657.77}, {
                    "name": "上海",
                    "value": 4097.26
                }, {"name": "江苏", "value": 5198.03}, {"name": "浙江", "value": 4584.22}, {
                    "name": "安徽",
                    "value": 1963.9
                }, {"name": "福建", "value": 2206.02}, {"name": "江西", "value": 1225.8}, {
                    "name": "山东",
                    "value": 4764.7
                }, {"name": "河南", "value": 2722.4}, {"name": "湖北", "value": 2292.55}, {
                    "name": "湖南",
                    "value": 2428.95
                }, {"name": "广东", "value": 8335.3}, {"name": "广西", "value": 1361.92}, {
                    "name": "海南",
                    "value": 335.3
                }, {"name": "重庆", "value": 1229.62}, {"name": "四川", "value": 2510.3}, {
                    "name": "贵州",
                    "value": 661.8
                }, {"name": "云南", "value": 1192.53}, {"name": "西藏", "value": 123.3}, {
                    "name": "陕西",
                    "value": 1234.6
                }, {"name": "甘肃", "value": 688.41}, {"name": "青海", "value": 193.7}, {
                    "name": "宁夏",
                    "value": 227.73
                }, {"name": "新疆", "value": 833.36}]
            }]
        }, {
            "title": {"text": "2005全国宏观经济指标"},
            "series": [{
                "name": "GDP",
                "_name": "GDP",
                "data": [{"name": "北京", "value": 6969.52}, {"name": "天津", "value": 3905.64}, {
                    "name": "河北",
                    "value": 10012.11
                }, {"name": "山西", "value": 4230.53}, {"name": "内蒙古", "value": 3905.03}, {
                    "name": "辽宁",
                    "value": 8047.26
                }, {"name": "吉林", "value": 3620.27}, {"name": "黑龙江", "value": 5513.7}, {
                    "name": "上海",
                    "value": 9247.66
                }, {"name": "江苏", "value": 18598.69}, {"name": "浙江", "value": 13417.68}, {
                    "name": "安徽",
                    "value": 5350.17
                }, {"name": "福建", "value": 6554.69}, {"name": "江西", "value": 4056.76}, {
                    "name": "山东",
                    "value": 18366.87
                }, {"name": "河南", "value": 10587.42}, {"name": "湖北", "value": 6590.19}, {
                    "name": "湖南",
                    "value": 6596.1
                }, {"name": "广东", "value": 22557.37}, {"name": "广西", "value": 3984.1}, {
                    "name": "海南",
                    "value": 918.75
                }, {"name": "重庆", "value": 3467.72}, {"name": "四川", "value": 7385.1}, {
                    "name": "贵州",
                    "value": 2005.42
                }, {"name": "云南", "value": 3462.73}, {"name": "西藏", "value": 248.8}, {
                    "name": "陕西",
                    "value": 3933.72
                }, {"name": "甘肃", "value": 1933.98}, {"name": "青海", "value": 543.32}, {
                    "name": "宁夏",
                    "value": 612.61
                }, {"name": "新疆", "value": 2604.19}]
            }, {
                "name": "金融",
                "_name": "Financial",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 840.2}, {"name": "天津", "value": 147.4}, {
                    "name": "河北",
                    "value": 213.47
                }, {"name": "山西", "value": 135.07}, {"name": "内蒙古", "value": 72.52}, {
                    "name": "辽宁",
                    "value": 232.85
                }, {"name": "吉林", "value": 83.63}, {"name": "黑龙江", "value": 35.03}, {
                    "name": "上海",
                    "value": 675.12
                }, {"name": "江苏", "value": 492.4}, {"name": "浙江", "value": 686.32}, {
                    "name": "安徽",
                    "value": 127.05
                }, {"name": "福建", "value": 186.12}, {"name": "江西", "value": 69.55}, {
                    "name": "山东",
                    "value": 448.36
                }, {"name": "河南", "value": 181.74}, {"name": "湖北", "value": 127.32}, {
                    "name": "湖南",
                    "value": 162.37
                }, {"name": "广东", "value": 661.81}, {"name": "广西", "value": 91.93}, {
                    "name": "海南",
                    "value": 13.16
                }, {"name": "重庆", "value": 185.18}, {"name": "四川", "value": 262.26}, {
                    "name": "贵州",
                    "value": 73.67
                }, {"name": "云南", "value": 130.5}, {"name": "西藏", "value": 7.57}, {
                    "name": "陕西",
                    "value": 127.58
                }, {"name": "甘肃", "value": 44.73}, {"name": "青海", "value": 20.36}, {
                    "name": "宁夏",
                    "value": 32.25
                }, {"name": "新疆", "value": 80.34}]
            }, {
                "name": "房地产",
                "_name": "Estate",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 493.73}, {"name": "天津", "value": 122.67}, {
                    "name": "河北",
                    "value": 330.87
                }, {"name": "山西", "value": 106}, {"name": "内蒙古", "value": 98.75}, {
                    "name": "辽宁",
                    "value": 256.77
                }, {"name": "吉林", "value": 112.29}, {"name": "黑龙江", "value": 163.34}, {
                    "name": "上海",
                    "value": 715.97
                }, {"name": "江苏", "value": 799.73}, {"name": "浙江", "value": 688.86}, {
                    "name": "安徽",
                    "value": 231.66
                }, {"name": "福建", "value": 331.8}, {"name": "江西", "value": 171.88}, {
                    "name": "山东",
                    "value": 664.9
                }, {"name": "河南", "value": 298.19}, {"name": "湖北", "value": 217.17}, {
                    "name": "湖南",
                    "value": 215.63
                }, {"name": "广东", "value": 1430.37}, {"name": "广西", "value": 165.05}, {
                    "name": "海南",
                    "value": 38.2
                }, {"name": "重庆", "value": 143.88}, {"name": "四川", "value": 286.23}, {
                    "name": "贵州",
                    "value": 76.38
                }, {"name": "云南", "value": 148.69}, {"name": "西藏", "value": 10.02}, {
                    "name": "陕西",
                    "value": 108.62
                }, {"name": "甘肃", "value": 63.78}, {"name": "青海", "value": 14.1}, {
                    "name": "宁夏",
                    "value": 22.97
                }, {"name": "新疆", "value": 55.79}]
            }, {
                "name": "第一产业",
                "_name": "PI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 88.68}, {"name": "天津", "value": 112.38}, {
                    "name": "河北",
                    "value": 1400
                }, {"name": "山西", "value": 262.42}, {"name": "内蒙古", "value": 589.56}, {
                    "name": "辽宁",
                    "value": 882.41
                }, {"name": "吉林", "value": 625.61}, {"name": "黑龙江", "value": 684.6}, {
                    "name": "上海",
                    "value": 90.26
                }, {"name": "江苏", "value": 1461.51}, {"name": "浙江", "value": 892.83}, {
                    "name": "安徽",
                    "value": 966.5
                }, {"name": "福建", "value": 827.36}, {"name": "江西", "value": 727.37}, {
                    "name": "山东",
                    "value": 1963.51
                }, {"name": "河南", "value": 1892.01}, {"name": "湖北", "value": 1082.13}, {
                    "name": "湖南",
                    "value": 1100.65
                }, {"name": "广东", "value": 1428.27}, {"name": "广西", "value": 912.5}, {
                    "name": "海南",
                    "value": 300.75
                }, {"name": "重庆", "value": 463.4}, {"name": "四川", "value": 1481.14}, {
                    "name": "贵州",
                    "value": 368.94
                }, {"name": "云南", "value": 661.69}, {"name": "西藏", "value": 48.04}, {
                    "name": "陕西",
                    "value": 435.77
                }, {"name": "甘肃", "value": 308.06}, {"name": "青海", "value": 65.34}, {
                    "name": "宁夏",
                    "value": 72.07
                }, {"name": "新疆", "value": 509.99}]
            }, {
                "name": "第二产业",
                "_name": "SI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 2026.51}, {"name": "天津", "value": 2135.07}, {
                    "name": "河北",
                    "value": 5271.57
                }, {"name": "山西", "value": 2357.04}, {"name": "内蒙古", "value": 1773.21}, {
                    "name": "辽宁",
                    "value": 3869.4
                }, {"name": "吉林", "value": 1580.83}, {"name": "黑龙江", "value": 2971.68}, {
                    "name": "上海",
                    "value": 4381.2
                }, {"name": "江苏", "value": 10524.96}, {"name": "浙江", "value": 7164.75}, {
                    "name": "安徽",
                    "value": 2245.9
                }, {"name": "福建", "value": 3175.92}, {"name": "江西", "value": 1917.47}, {
                    "name": "山东",
                    "value": 10478.62
                }, {"name": "河南", "value": 5514.14}, {"name": "湖北", "value": 2852.12}, {
                    "name": "湖南",
                    "value": 2612.57
                }, {"name": "广东", "value": 11356.6}, {"name": "广西", "value": 1510.68}, {
                    "name": "海南",
                    "value": 240.83
                }, {"name": "重庆", "value": 1564}, {"name": "四川", "value": 3067.23}, {
                    "name": "贵州",
                    "value": 821.16
                }, {"name": "云南", "value": 1426.42}, {"name": "西藏", "value": 63.52}, {
                    "name": "陕西",
                    "value": 1951.36
                }, {"name": "甘肃", "value": 838.56}, {"name": "青海", "value": 264.61}, {
                    "name": "宁夏",
                    "value": 281.05
                }, {"name": "新疆", "value": 1164.79}]
            }, {
                "name": "第三产业",
                "_name": "TI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 4854.33}, {"name": "天津", "value": 1658.19}, {
                    "name": "河北",
                    "value": 3340.54
                }, {"name": "山西", "value": 1611.07}, {"name": "内蒙古", "value": 1542.26}, {
                    "name": "辽宁",
                    "value": 3295.45
                }, {"name": "吉林", "value": 1413.83}, {"name": "黑龙江", "value": 1857.42}, {
                    "name": "上海",
                    "value": 4776.2
                }, {"name": "江苏", "value": 6612.22}, {"name": "浙江", "value": 5360.1}, {
                    "name": "安徽",
                    "value": 2137.77
                }, {"name": "福建", "value": 2551.41}, {"name": "江西", "value": 1411.92}, {
                    "name": "山东",
                    "value": 5924.74
                }, {"name": "河南", "value": 3181.27}, {"name": "湖北", "value": 2655.94}, {
                    "name": "湖南",
                    "value": 2882.88
                }, {"name": "广东", "value": 9772.5}, {"name": "广西", "value": 1560.92}, {
                    "name": "海南",
                    "value": 377.17
                }, {"name": "重庆", "value": 1440.32}, {"name": "四川", "value": 2836.73}, {
                    "name": "贵州",
                    "value": 815.32
                }, {"name": "云南", "value": 1374.62}, {"name": "西藏", "value": 137.24}, {
                    "name": "陕西",
                    "value": 1546.59
                }, {"name": "甘肃", "value": 787.36}, {"name": "青海", "value": 213.37}, {
                    "name": "宁夏",
                    "value": 259.49
                }, {"name": "新疆", "value": 929.41}]
            }]
        }, {
            "title": {"text": "2006全国宏观经济指标"},
            "series": [{
                "name": "GDP",
                "_name": "GDP",
                "data": [{"name": "北京", "value": 8117.78}, {"name": "天津", "value": 4462.74}, {
                    "name": "河北",
                    "value": 11467.6
                }, {"name": "山西", "value": 4878.61}, {"name": "内蒙古", "value": 4944.25}, {
                    "name": "辽宁",
                    "value": 9304.52
                }, {"name": "吉林", "value": 4275.12}, {"name": "黑龙江", "value": 6211.8}, {
                    "name": "上海",
                    "value": 10572.24
                }, {"name": "江苏", "value": 21742.05}, {"name": "浙江", "value": 15718.47}, {
                    "name": "安徽",
                    "value": 6112.5
                }, {"name": "福建", "value": 7583.85}, {"name": "江西", "value": 4820.53}, {
                    "name": "山东",
                    "value": 21900.19
                }, {"name": "河南", "value": 12362.79}, {"name": "湖北", "value": 7617.47}, {
                    "name": "湖南",
                    "value": 7688.67
                }, {"name": "广东", "value": 26587.76}, {"name": "广西", "value": 4746.16}, {
                    "name": "海南",
                    "value": 1065.67
                }, {"name": "重庆", "value": 3907.23}, {"name": "四川", "value": 8690.24}, {
                    "name": "贵州",
                    "value": 2338.98
                }, {"name": "云南", "value": 3988.14}, {"name": "西藏", "value": 290.76}, {
                    "name": "陕西",
                    "value": 4743.61
                }, {"name": "甘肃", "value": 2277.35}, {"name": "青海", "value": 648.5}, {
                    "name": "宁夏",
                    "value": 725.9
                }, {"name": "新疆", "value": 3045.26}]
            }, {
                "name": "金融",
                "_name": "Financial",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 982.37}, {"name": "天津", "value": 186.87}, {
                    "name": "河北",
                    "value": 284.04
                }, {"name": "山西", "value": 169.63}, {"name": "内蒙古", "value": 108.21}, {
                    "name": "辽宁",
                    "value": 303.41
                }, {"name": "吉林", "value": 100.75}, {"name": "黑龙江", "value": 74.17}, {
                    "name": "上海",
                    "value": 825.2
                }, {"name": "江苏", "value": 653.25}, {"name": "浙江", "value": 906.37}, {
                    "name": "安徽",
                    "value": 166.01
                }, {"name": "福建", "value": 243.9}, {"name": "江西", "value": 79.75}, {
                    "name": "山东",
                    "value": 524.94
                }, {"name": "河南", "value": 219.72}, {"name": "湖北", "value": 174.99}, {
                    "name": "湖南",
                    "value": 204.72
                }, {"name": "广东", "value": 899.91}, {"name": "广西", "value": 129.14}, {
                    "name": "海南",
                    "value": 16.37
                }, {"name": "重庆", "value": 213.7}, {"name": "四川", "value": 299.5}, {
                    "name": "贵州",
                    "value": 89.43
                }, {"name": "云南", "value": 143.62}, {"name": "西藏", "value": 6.44}, {
                    "name": "陕西",
                    "value": 152.25
                }, {"name": "甘肃", "value": 50.51}, {"name": "青海", "value": 23.69}, {
                    "name": "宁夏",
                    "value": 36.99
                }, {"name": "新疆", "value": 99.25}]
            }, {
                "name": "房地产",
                "_name": "Estate",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 658.3}, {"name": "天津", "value": 156.64}, {
                    "name": "河北",
                    "value": 397.14
                }, {"name": "山西", "value": 117.01}, {"name": "内蒙古", "value": 136.5}, {
                    "name": "辽宁",
                    "value": 318.54
                }, {"name": "吉林", "value": 131.01}, {"name": "黑龙江", "value": 194.7}, {
                    "name": "上海",
                    "value": 773.61
                }, {"name": "江苏", "value": 1017.91}, {"name": "浙江", "value": 794.41}, {
                    "name": "安徽",
                    "value": 281.98
                }, {"name": "福建", "value": 435.22}, {"name": "江西", "value": 184.67}, {
                    "name": "山东",
                    "value": 786.51
                }, {"name": "河南", "value": 348.7}, {"name": "湖北", "value": 294.73}, {
                    "name": "湖南",
                    "value": 254.81
                }, {"name": "广东", "value": 1722.07}, {"name": "广西", "value": 192.2}, {
                    "name": "海南",
                    "value": 44.45
                }, {"name": "重庆", "value": 158.2}, {"name": "四川", "value": 336.2}, {
                    "name": "贵州",
                    "value": 80.24
                }, {"name": "云南", "value": 165.92}, {"name": "西藏", "value": 11.92}, {
                    "name": "陕西",
                    "value": 125.2
                }, {"name": "甘肃", "value": 73.21}, {"name": "青海", "value": 15.17}, {
                    "name": "宁夏",
                    "value": 25.53
                }, {"name": "新疆", "value": 68.9}]
            }, {
                "name": "第一产业",
                "_name": "PI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 88.8}, {"name": "天津", "value": 103.35}, {
                    "name": "河北",
                    "value": 1461.81
                }, {"name": "山西", "value": 276.77}, {"name": "内蒙古", "value": 634.94}, {
                    "name": "辽宁",
                    "value": 939.43
                }, {"name": "吉林", "value": 672.76}, {"name": "黑龙江", "value": 750.14}, {
                    "name": "上海",
                    "value": 93.81
                }, {"name": "江苏", "value": 1545.05}, {"name": "浙江", "value": 925.1}, {
                    "name": "安徽",
                    "value": 1011.03
                }, {"name": "福建", "value": 865.98}, {"name": "江西", "value": 786.14}, {
                    "name": "山东",
                    "value": 2138.9
                }, {"name": "河南", "value": 1916.74}, {"name": "湖北", "value": 1140.41}, {
                    "name": "湖南",
                    "value": 1272.2
                }, {"name": "广东", "value": 1532.17}, {"name": "广西", "value": 1032.47}, {
                    "name": "海南",
                    "value": 323.48
                }, {"name": "重庆", "value": 386.38}, {"name": "四川", "value": 1595.48}, {
                    "name": "贵州",
                    "value": 382.06
                }, {"name": "云南", "value": 724.4}, {"name": "西藏", "value": 50.9}, {
                    "name": "陕西",
                    "value": 484.81
                }, {"name": "甘肃", "value": 334}, {"name": "青海", "value": 67.55}, {
                    "name": "宁夏",
                    "value": 79.54
                }, {"name": "新疆", "value": 527.8}]
            }, {
                "name": "第二产业",
                "_name": "SI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 2191.43}, {"name": "天津", "value": 2457.08}, {
                    "name": "河北",
                    "value": 6110.43
                }, {"name": "山西", "value": 2755.66}, {"name": "内蒙古", "value": 2374.96}, {
                    "name": "辽宁",
                    "value": 4566.83
                }, {"name": "吉林", "value": 1915.29}, {"name": "黑龙江", "value": 3365.31}, {
                    "name": "上海",
                    "value": 4969.95
                }, {"name": "江苏", "value": 12282.89}, {"name": "浙江", "value": 8511.51}, {
                    "name": "安徽",
                    "value": 2711.18
                }, {"name": "福建", "value": 3695.04}, {"name": "江西", "value": 2419.74}, {
                    "name": "山东",
                    "value": 12574.03
                }, {"name": "河南", "value": 6724.61}, {"name": "湖北", "value": 3365.08}, {
                    "name": "湖南",
                    "value": 3187.05
                }, {"name": "广东", "value": 13469.77}, {"name": "广西", "value": 1878.56}, {
                    "name": "海南",
                    "value": 308.62
                }, {"name": "重庆", "value": 1871.65}, {"name": "四川", "value": 3775.14}, {
                    "name": "贵州",
                    "value": 967.54
                }, {"name": "云南", "value": 1705.83}, {"name": "西藏", "value": 80.1}, {
                    "name": "陕西",
                    "value": 2452.44
                }, {"name": "甘肃", "value": 1043.19}, {"name": "青海", "value": 331.91}, {
                    "name": "宁夏",
                    "value": 351.58
                }, {"name": "新疆", "value": 1459.3}]
            }, {
                "name": "第三产业",
                "_name": "TI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 5837.55}, {"name": "天津", "value": 1902.31}, {
                    "name": "河北",
                    "value": 3895.36
                }, {"name": "山西", "value": 1846.18}, {"name": "内蒙古", "value": 1934.35}, {
                    "name": "辽宁",
                    "value": 3798.26
                }, {"name": "吉林", "value": 1687.07}, {"name": "黑龙江", "value": 2096.35}, {
                    "name": "上海",
                    "value": 5508.48
                }, {"name": "江苏", "value": 7914.11}, {"name": "浙江", "value": 6281.86}, {
                    "name": "安徽",
                    "value": 2390.29
                }, {"name": "福建", "value": 3022.83}, {"name": "江西", "value": 1614.65}, {
                    "name": "山东",
                    "value": 7187.26
                }, {"name": "河南", "value": 3721.44}, {"name": "湖北", "value": 3111.98}, {
                    "name": "湖南",
                    "value": 3229.42
                }, {"name": "广东", "value": 11585.82}, {"name": "广西", "value": 1835.12}, {
                    "name": "海南",
                    "value": 433.57
                }, {"name": "重庆", "value": 1649.2}, {"name": "四川", "value": 3319.62}, {
                    "name": "贵州",
                    "value": 989.38
                }, {"name": "云南", "value": 1557.91}, {"name": "西藏", "value": 159.76}, {
                    "name": "陕西",
                    "value": 1806.36
                }, {"name": "甘肃", "value": 900.16}, {"name": "青海", "value": 249.04}, {
                    "name": "宁夏",
                    "value": 294.78
                }, {"name": "新疆", "value": 1058.16}]
            }]
        }, {
            "title": {"text": "2007全国宏观经济指标"},
            "series": [{
                "name": "GDP",
                "_name": "GDP",
                "data": [{"name": "北京", "value": 9846.81}, {"name": "天津", "value": 5252.76}, {
                    "name": "河北",
                    "value": 13607.32
                }, {"name": "山西", "value": 6024.45}, {"name": "内蒙古", "value": 6423.18}, {
                    "name": "辽宁",
                    "value": 11164.3
                }, {"name": "吉林", "value": 5284.69}, {"name": "黑龙江", "value": 7104}, {
                    "name": "上海",
                    "value": 12494.01
                }, {"name": "江苏", "value": 26018.48}, {"name": "浙江", "value": 18753.73}, {
                    "name": "安徽",
                    "value": 7360.92
                }, {"name": "福建", "value": 9248.53}, {"name": "江西", "value": 5800.25}, {
                    "name": "山东",
                    "value": 25776.91
                }, {"name": "河南", "value": 15012.46}, {"name": "湖北", "value": 9333.4}, {
                    "name": "湖南",
                    "value": 9439.6
                }, {"name": "广东", "value": 31777.01}, {"name": "广西", "value": 5823.41}, {
                    "name": "海南",
                    "value": 1254.17
                }, {"name": "重庆", "value": 4676.13}, {"name": "四川", "value": 10562.39}, {
                    "name": "贵州",
                    "value": 2884.11
                }, {"name": "云南", "value": 4772.52}, {"name": "西藏", "value": 341.43}, {
                    "name": "陕西",
                    "value": 5757.29
                }, {"name": "甘肃", "value": 2703.98}, {"name": "青海", "value": 797.35}, {
                    "name": "宁夏",
                    "value": 919.11
                }, {"name": "新疆", "value": 3523.16}]
            }, {
                "name": "金融",
                "_name": "Financial",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 1302.77}, {"name": "天津", "value": 288.17}, {
                    "name": "河北",
                    "value": 347.65
                }, {"name": "山西", "value": 218.73}, {"name": "内蒙古", "value": 148.3}, {
                    "name": "辽宁",
                    "value": 386.34
                }, {"name": "吉林", "value": 126.03}, {"name": "黑龙江", "value": 155.48}, {
                    "name": "上海",
                    "value": 1209.08
                }, {"name": "江苏", "value": 1054.25}, {"name": "浙江", "value": 1251.43}, {
                    "name": "安徽",
                    "value": 223.85
                }, {"name": "福建", "value": 385.84}, {"name": "江西", "value": 101.34}, {
                    "name": "山东",
                    "value": 734.9
                }, {"name": "河南", "value": 302.31}, {"name": "湖北", "value": 337.27}, {
                    "name": "湖南",
                    "value": 260.14
                }, {"name": "广东", "value": 1705.08}, {"name": "广西", "value": 190.73}, {
                    "name": "海南",
                    "value": 34.43
                }, {"name": "重庆", "value": 247.46}, {"name": "四川", "value": 359.11}, {
                    "name": "贵州",
                    "value": 122.25
                }, {"name": "云南", "value": 168.55}, {"name": "西藏", "value": 11.51}, {
                    "name": "陕西",
                    "value": 231.03
                }, {"name": "甘肃", "value": 61.6}, {"name": "青海", "value": 27.67}, {
                    "name": "宁夏",
                    "value": 51.05
                }, {"name": "新疆", "value": 149.22}]
            }, {
                "name": "房地产",
                "_name": "Estate",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 821.5}, {"name": "天津", "value": 183.44}, {
                    "name": "河北",
                    "value": 467.97
                }, {"name": "山西", "value": 134.12}, {"name": "内蒙古", "value": 191.01}, {
                    "name": "辽宁",
                    "value": 410.43
                }, {"name": "吉林", "value": 153.03}, {"name": "黑龙江", "value": 225.81}, {
                    "name": "上海",
                    "value": 958.06
                }, {"name": "江苏", "value": 1365.71}, {"name": "浙江", "value": 981.42}, {
                    "name": "安徽",
                    "value": 366.57
                }, {"name": "福建", "value": 511.5}, {"name": "江西", "value": 225.96}, {
                    "name": "山东",
                    "value": 953.69
                }, {"name": "河南", "value": 447.44}, {"name": "湖北", "value": 409.65}, {
                    "name": "湖南",
                    "value": 301.8
                }, {"name": "广东", "value": 2029.77}, {"name": "广西", "value": 239.45}, {
                    "name": "海南",
                    "value": 67.19
                }, {"name": "重庆", "value": 196.06}, {"name": "四川", "value": 376.84}, {
                    "name": "贵州",
                    "value": 93.19
                }, {"name": "云南", "value": 193.59}, {"name": "西藏", "value": 13.24}, {
                    "name": "陕西",
                    "value": 153.98
                }, {"name": "甘肃", "value": 83.52}, {"name": "青海", "value": 16.98}, {
                    "name": "宁夏",
                    "value": 29.49
                }, {"name": "新疆", "value": 91.28}]
            }, {
                "name": "第一产业",
                "_name": "PI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 101.26}, {"name": "天津", "value": 110.19}, {
                    "name": "河北",
                    "value": 1804.72
                }, {"name": "山西", "value": 311.97}, {"name": "内蒙古", "value": 762.1}, {
                    "name": "辽宁",
                    "value": 1133.42
                }, {"name": "吉林", "value": 783.8}, {"name": "黑龙江", "value": 915.38}, {
                    "name": "上海",
                    "value": 101.84
                }, {"name": "江苏", "value": 1816.31}, {"name": "浙江", "value": 986.02}, {
                    "name": "安徽",
                    "value": 1200.18
                }, {"name": "福建", "value": 1002.11}, {"name": "江西", "value": 905.77}, {
                    "name": "山东",
                    "value": 2509.14
                }, {"name": "河南", "value": 2217.66}, {"name": "湖北", "value": 1378}, {
                    "name": "湖南",
                    "value": 1626.48
                }, {"name": "广东", "value": 1695.57}, {"name": "广西", "value": 1241.35}, {
                    "name": "海南",
                    "value": 361.07
                }, {"name": "重庆", "value": 482.39}, {"name": "四川", "value": 2032}, {
                    "name": "贵州",
                    "value": 446.38
                }, {"name": "云南", "value": 837.35}, {"name": "西藏", "value": 54.89}, {
                    "name": "陕西",
                    "value": 592.63
                }, {"name": "甘肃", "value": 387.55}, {"name": "青海", "value": 83.41}, {
                    "name": "宁夏",
                    "value": 97.89
                }, {"name": "新疆", "value": 628.72}]
            }, {
                "name": "第二产业",
                "_name": "SI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 2509.4}, {"name": "天津", "value": 2892.53}, {
                    "name": "河北",
                    "value": 7201.88
                }, {"name": "山西", "value": 3454.49}, {"name": "内蒙古", "value": 3193.67}, {
                    "name": "辽宁",
                    "value": 5544.14
                }, {"name": "吉林", "value": 2475.45}, {"name": "黑龙江", "value": 3695.58}, {
                    "name": "上海",
                    "value": 5571.06
                }, {"name": "江苏", "value": 14471.26}, {"name": "浙江", "value": 10154.25}, {
                    "name": "安徽",
                    "value": 3370.96
                }, {"name": "福建", "value": 4476.42}, {"name": "江西", "value": 2975.53}, {
                    "name": "山东",
                    "value": 14647.53
                }, {"name": "河南", "value": 8282.83}, {"name": "湖北", "value": 4143.06}, {
                    "name": "湖南",
                    "value": 3977.72
                }, {"name": "广东", "value": 16004.61}, {"name": "广西", "value": 2425.29}, {
                    "name": "海南",
                    "value": 364.26
                }, {"name": "重庆", "value": 2368.53}, {"name": "四川", "value": 4648.79}, {
                    "name": "贵州",
                    "value": 1124.79
                }, {"name": "云南", "value": 2038.39}, {"name": "西藏", "value": 98.48}, {
                    "name": "陕西",
                    "value": 2986.46
                }, {"name": "甘肃", "value": 1279.32}, {"name": "青海", "value": 419.03}, {
                    "name": "宁夏",
                    "value": 455.04
                }, {"name": "新疆", "value": 1647.55}]
            }, {
                "name": "第三产业",
                "_name": "TI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 7236.15}, {"name": "天津", "value": 2250.04}, {
                    "name": "河北",
                    "value": 4600.72
                }, {"name": "山西", "value": 2257.99}, {"name": "内蒙古", "value": 2467.41}, {
                    "name": "辽宁",
                    "value": 4486.74
                }, {"name": "吉林", "value": 2025.44}, {"name": "黑龙江", "value": 2493.04}, {
                    "name": "上海",
                    "value": 6821.11
                }, {"name": "江苏", "value": 9730.91}, {"name": "浙江", "value": 7613.46}, {
                    "name": "安徽",
                    "value": 2789.78
                }, {"name": "福建", "value": 3770}, {"name": "江西", "value": 1918.95}, {
                    "name": "山东",
                    "value": 8620.24
                }, {"name": "河南", "value": 4511.97}, {"name": "湖北", "value": 3812.34}, {
                    "name": "湖南",
                    "value": 3835.4
                }, {"name": "广东", "value": 14076.83}, {"name": "广西", "value": 2156.76}, {
                    "name": "海南",
                    "value": 528.84
                }, {"name": "重庆", "value": 1825.21}, {"name": "四川", "value": 3881.6}, {
                    "name": "贵州",
                    "value": 1312.94
                }, {"name": "云南", "value": 1896.78}, {"name": "西藏", "value": 188.06}, {
                    "name": "陕西",
                    "value": 2178.2
                }, {"name": "甘肃", "value": 1037.11}, {"name": "青海", "value": 294.91}, {
                    "name": "宁夏",
                    "value": 366.18
                }, {"name": "新疆", "value": 1246.89}]
            }]
        }, {
            "title": {"text": "2008全国宏观经济指标"},
            "series": [{
                "name": "GDP",
                "_name": "GDP",
                "data": [{"name": "北京", "value": 11115}, {"name": "天津", "value": 6719.01}, {
                    "name": "河北",
                    "value": 16011.97
                }, {"name": "山西", "value": 7315.4}, {"name": "内蒙古", "value": 8496.2}, {
                    "name": "辽宁",
                    "value": 13668.58
                }, {"name": "吉林", "value": 6426.1}, {"name": "黑龙江", "value": 8314.37}, {
                    "name": "上海",
                    "value": 14069.87
                }, {"name": "江苏", "value": 30981.98}, {"name": "浙江", "value": 21462.69}, {
                    "name": "安徽",
                    "value": 8851.66
                }, {"name": "福建", "value": 10823.01}, {"name": "江西", "value": 6971.05}, {
                    "name": "山东",
                    "value": 30933.28
                }, {"name": "河南", "value": 18018.53}, {"name": "湖北", "value": 11328.92}, {
                    "name": "湖南",
                    "value": 11555
                }, {"name": "广东", "value": 36796.71}, {"name": "广西", "value": 7021}, {
                    "name": "海南",
                    "value": 1503.06
                }, {"name": "重庆", "value": 5793.66}, {"name": "四川", "value": 12601.23}, {
                    "name": "贵州",
                    "value": 3561.56
                }, {"name": "云南", "value": 5692.12}, {"name": "西藏", "value": 394.85}, {
                    "name": "陕西",
                    "value": 7314.58
                }, {"name": "甘肃", "value": 3166.82}, {"name": "青海", "value": 1018.62}, {
                    "name": "宁夏",
                    "value": 1203.92
                }, {"name": "新疆", "value": 4183.21}]
            }, {
                "name": "金融",
                "_name": "Financial",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 1519.19}, {"name": "天津", "value": 368.1}, {
                    "name": "河北",
                    "value": 420.74
                }, {"name": "山西", "value": 290.91}, {"name": "内蒙古", "value": 219.09}, {
                    "name": "辽宁",
                    "value": 455.07
                }, {"name": "吉林", "value": 147.24}, {"name": "黑龙江", "value": 177.43}, {
                    "name": "上海",
                    "value": 1414.21
                }, {"name": "江苏", "value": 1298.48}, {"name": "浙江", "value": 1653.45}, {
                    "name": "安徽",
                    "value": 313.81
                }, {"name": "福建", "value": 497.65}, {"name": "江西", "value": 130.57}, {
                    "name": "山东",
                    "value": 880.28
                }, {"name": "河南", "value": 413.83}, {"name": "湖北", "value": 393.05}, {
                    "name": "湖南",
                    "value": 334.32
                }, {"name": "广东", "value": 1972.4}, {"name": "广西", "value": 249.01}, {
                    "name": "海南",
                    "value": 47.33
                }, {"name": "重庆", "value": 303.01}, {"name": "四川", "value": 411.14}, {
                    "name": "贵州",
                    "value": 151.55
                }, {"name": "云南", "value": 277.66}, {"name": "西藏", "value": 22.42}, {
                    "name": "陕西",
                    "value": 287.16
                }, {"name": "甘肃", "value": 72.49}, {"name": "青海", "value": 36.54}, {
                    "name": "宁夏",
                    "value": 64.8
                }, {"name": "新疆", "value": 171.97}]
            }, {
                "name": "房地产",
                "_name": "Estate",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 844.59}, {"name": "天津", "value": 227.88}, {
                    "name": "河北",
                    "value": 513.81
                }, {"name": "山西", "value": 166.04}, {"name": "内蒙古", "value": 273.3}, {
                    "name": "辽宁",
                    "value": 500.81
                }, {"name": "吉林", "value": 182.7}, {"name": "黑龙江", "value": 244.47}, {
                    "name": "上海",
                    "value": 939.34
                }, {"name": "江苏", "value": 1626.13}, {"name": "浙江", "value": 1052.03}, {
                    "name": "安徽",
                    "value": 431.27
                }, {"name": "福建", "value": 506.98}, {"name": "江西", "value": 281.96}, {
                    "name": "山东",
                    "value": 1104.95
                }, {"name": "河南", "value": 512.42}, {"name": "湖北", "value": 526.88}, {
                    "name": "湖南",
                    "value": 340.07
                }, {"name": "广东", "value": 2057.45}, {"name": "广西", "value": 282.96}, {
                    "name": "海南",
                    "value": 95.6
                }, {"name": "重庆", "value": 191.21}, {"name": "四川", "value": 453.63}, {
                    "name": "贵州",
                    "value": 104.81
                }, {"name": "云南", "value": 195.48}, {"name": "西藏", "value": 15.08}, {
                    "name": "陕西",
                    "value": 193.27
                }, {"name": "甘肃", "value": 93.8}, {"name": "青海", "value": 19.96}, {
                    "name": "宁夏",
                    "value": 38.85
                }, {"name": "新疆", "value": 89.79}]
            }, {
                "name": "第一产业",
                "_name": "PI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 112.83}, {"name": "天津", "value": 122.58}, {
                    "name": "河北",
                    "value": 2034.59
                }, {"name": "山西", "value": 313.58}, {"name": "内蒙古", "value": 907.95}, {
                    "name": "辽宁",
                    "value": 1302.02
                }, {"name": "吉林", "value": 916.72}, {"name": "黑龙江", "value": 1088.94}, {
                    "name": "上海",
                    "value": 111.8
                }, {"name": "江苏", "value": 2100.11}, {"name": "浙江", "value": 1095.96}, {
                    "name": "安徽",
                    "value": 1418.09
                }, {"name": "福建", "value": 1158.17}, {"name": "江西", "value": 1060.38}, {
                    "name": "山东",
                    "value": 3002.65
                }, {"name": "河南", "value": 2658.78}, {"name": "湖北", "value": 1780}, {
                    "name": "湖南",
                    "value": 1892.4
                }, {"name": "广东", "value": 1973.05}, {"name": "广西", "value": 1453.75}, {
                    "name": "海南",
                    "value": 436.04
                }, {"name": "重庆", "value": 575.4}, {"name": "四川", "value": 2216.15}, {
                    "name": "贵州",
                    "value": 539.19
                }, {"name": "云南", "value": 1020.56}, {"name": "西藏", "value": 60.62}, {
                    "name": "陕西",
                    "value": 753.72
                }, {"name": "甘肃", "value": 462.27}, {"name": "青海", "value": 105.57}, {
                    "name": "宁夏",
                    "value": 118.94
                }, {"name": "新疆", "value": 691.07}]
            }, {
                "name": "第二产业",
                "_name": "SI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 2626.41}, {"name": "天津", "value": 3709.78}, {
                    "name": "河北",
                    "value": 8701.34
                }, {"name": "山西", "value": 4242.36}, {"name": "内蒙古", "value": 4376.19}, {
                    "name": "辽宁",
                    "value": 7158.84
                }, {"name": "吉林", "value": 3097.12}, {"name": "黑龙江", "value": 4319.75}, {
                    "name": "上海",
                    "value": 6085.84
                }, {"name": "江苏", "value": 16993.34}, {"name": "浙江", "value": 11567.42}, {
                    "name": "安徽",
                    "value": 4198.93
                }, {"name": "福建", "value": 5318.44}, {"name": "江西", "value": 3554.81}, {
                    "name": "山东",
                    "value": 17571.98
                }, {"name": "河南", "value": 10259.99}, {"name": "湖北", "value": 5082.07}, {
                    "name": "湖南",
                    "value": 5028.93
                }, {"name": "广东", "value": 18502.2}, {"name": "广西", "value": 3037.74}, {
                    "name": "海南",
                    "value": 423.55
                }, {"name": "重庆", "value": 3057.78}, {"name": "四川", "value": 5823.39}, {
                    "name": "贵州",
                    "value": 1370.03
                }, {"name": "云南", "value": 2452.75}, {"name": "西藏", "value": 115.56}, {
                    "name": "陕西",
                    "value": 3861.12
                }, {"name": "甘肃", "value": 1470.34}, {"name": "青海", "value": 557.12}, {
                    "name": "宁夏",
                    "value": 609.98
                }, {"name": "新疆", "value": 2070.76}]
            }, {
                "name": "第三产业",
                "_name": "TI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 8375.76}, {"name": "天津", "value": 2886.65}, {
                    "name": "河北",
                    "value": 5276.04
                }, {"name": "山西", "value": 2759.46}, {"name": "内蒙古", "value": 3212.06}, {
                    "name": "辽宁",
                    "value": 5207.72
                }, {"name": "吉林", "value": 2412.26}, {"name": "黑龙江", "value": 2905.68}, {
                    "name": "上海",
                    "value": 7872.23
                }, {"name": "江苏", "value": 11888.53}, {"name": "浙江", "value": 8799.31}, {
                    "name": "安徽",
                    "value": 3234.64
                }, {"name": "福建", "value": 4346.4}, {"name": "江西", "value": 2355.86}, {
                    "name": "山东",
                    "value": 10358.64
                }, {"name": "河南", "value": 5099.76}, {"name": "湖北", "value": 4466.85}, {
                    "name": "湖南",
                    "value": 4633.67
                }, {"name": "广东", "value": 16321.46}, {"name": "广西", "value": 2529.51}, {
                    "name": "海南",
                    "value": 643.47
                }, {"name": "重庆", "value": 2160.48}, {"name": "四川", "value": 4561.69}, {
                    "name": "贵州",
                    "value": 1652.34
                }, {"name": "云南", "value": 2218.81}, {"name": "西藏", "value": 218.67}, {
                    "name": "陕西",
                    "value": 2699.74
                }, {"name": "甘肃", "value": 1234.21}, {"name": "青海", "value": 355.93}, {
                    "name": "宁夏",
                    "value": 475
                }, {"name": "新疆", "value": 1421.38}]
            }]
        }, {
            "title": {"text": "2009全国宏观经济指标"},
            "series": [{
                "name": "GDP",
                "_name": "GDP",
                "data": [{"name": "北京", "value": 12153.03}, {"name": "天津", "value": 7521.85}, {
                    "name": "河北",
                    "value": 17235.48
                }, {"name": "山西", "value": 7358.31}, {"name": "内蒙古", "value": 9740.25}, {
                    "name": "辽宁",
                    "value": 15212.49
                }, {"name": "吉林", "value": 7278.75}, {"name": "黑龙江", "value": 8587}, {
                    "name": "上海",
                    "value": 15046.45
                }, {"name": "江苏", "value": 34457.3}, {"name": "浙江", "value": 22990.35}, {
                    "name": "安徽",
                    "value": 10062.82
                }, {"name": "福建", "value": 12236.53}, {"name": "江西", "value": 7655.18}, {
                    "name": "山东",
                    "value": 33896.65
                }, {"name": "河南", "value": 19480.46}, {"name": "湖北", "value": 12961.1}, {
                    "name": "湖南",
                    "value": 13059.69
                }, {"name": "广东", "value": 39482.56}, {"name": "广西", "value": 7759.16}, {
                    "name": "海南",
                    "value": 1654.21
                }, {"name": "重庆", "value": 6530.01}, {"name": "四川", "value": 14151.28}, {
                    "name": "贵州",
                    "value": 3912.68
                }, {"name": "云南", "value": 6169.75}, {"name": "西藏", "value": 441.36}, {
                    "name": "陕西",
                    "value": 8169.8
                }, {"name": "甘肃", "value": 3387.56}, {"name": "青海", "value": 1081.27}, {
                    "name": "宁夏",
                    "value": 1353.31
                }, {"name": "新疆", "value": 4277.05}]
            }, {
                "name": "金融",
                "_name": "Financial",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 1603.63}, {"name": "天津", "value": 461.2}, {
                    "name": "河北",
                    "value": 525.67
                }, {"name": "山西", "value": 361.64}, {"name": "内蒙古", "value": 291.1}, {
                    "name": "辽宁",
                    "value": 560.2
                }, {"name": "吉林", "value": 180.83}, {"name": "黑龙江", "value": 227.54}, {
                    "name": "上海",
                    "value": 1804.28
                }, {"name": "江苏", "value": 1596.98}, {"name": "浙江", "value": 1899.33}, {
                    "name": "安徽",
                    "value": 359.6
                }, {"name": "福建", "value": 612.2}, {"name": "江西", "value": 165.1}, {
                    "name": "山东",
                    "value": 1044.9
                }, {"name": "河南", "value": 499.92}, {"name": "湖北", "value": 479.11}, {
                    "name": "湖南",
                    "value": 402.57
                }, {"name": "广东", "value": 2283.29}, {"name": "广西", "value": 336.82}, {
                    "name": "海南",
                    "value": 65.73
                }, {"name": "重庆", "value": 389.97}, {"name": "四川", "value": 524.63}, {
                    "name": "贵州",
                    "value": 194.44
                }, {"name": "云南", "value": 351.74}, {"name": "西藏", "value": 23.17}, {
                    "name": "陕西",
                    "value": 336.21
                }, {"name": "甘肃", "value": 88.27}, {"name": "青海", "value": 45.63}, {
                    "name": "宁夏",
                    "value": 75.54
                }, {"name": "新疆", "value": 198.87}]
            }, {
                "name": "房地产",
                "_name": "Estate",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 1062.47}, {"name": "天津", "value": 308.73}, {
                    "name": "河北",
                    "value": 612.4
                }, {"name": "山西", "value": 173.31}, {"name": "内蒙古", "value": 286.65}, {
                    "name": "辽宁",
                    "value": 605.27
                }, {"name": "吉林", "value": 200.14}, {"name": "黑龙江", "value": 301.18}, {
                    "name": "上海",
                    "value": 1237.56
                }, {"name": "江苏", "value": 2025.39}, {"name": "浙江", "value": 1316.84}, {
                    "name": "安徽",
                    "value": 497.94
                }, {"name": "福建", "value": 656.61}, {"name": "江西", "value": 305.9}, {
                    "name": "山东",
                    "value": 1329.59
                }, {"name": "河南", "value": 622.98}, {"name": "湖北", "value": 546.11}, {
                    "name": "湖南",
                    "value": 400.11
                }, {"name": "广东", "value": 2470.63}, {"name": "广西", "value": 348.98}, {
                    "name": "海南",
                    "value": 121.76
                }, {"name": "重庆", "value": 229.09}, {"name": "四川", "value": 548.14}, {
                    "name": "贵州",
                    "value": 136.15
                }, {"name": "云南", "value": 205.14}, {"name": "西藏", "value": 13.28}, {
                    "name": "陕西",
                    "value": 239.92
                }, {"name": "甘肃", "value": 101.37}, {"name": "青海", "value": 23.05}, {
                    "name": "宁夏",
                    "value": 47.56
                }, {"name": "新疆", "value": 115.23}]
            }, {
                "name": "第一产业",
                "_name": "PI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 118.29}, {"name": "天津", "value": 128.85}, {
                    "name": "河北",
                    "value": 2207.34
                }, {"name": "山西", "value": 477.59}, {"name": "内蒙古", "value": 929.6}, {
                    "name": "辽宁",
                    "value": 1414.9
                }, {"name": "吉林", "value": 980.57}, {"name": "黑龙江", "value": 1154.33}, {
                    "name": "上海",
                    "value": 113.82
                }, {"name": "江苏", "value": 2261.86}, {"name": "浙江", "value": 1163.08}, {
                    "name": "安徽",
                    "value": 1495.45
                }, {"name": "福建", "value": 1182.74}, {"name": "江西", "value": 1098.66}, {
                    "name": "山东",
                    "value": 3226.64
                }, {"name": "河南", "value": 2769.05}, {"name": "湖北", "value": 1795.9}, {
                    "name": "湖南",
                    "value": 1969.69
                }, {"name": "广东", "value": 2010.27}, {"name": "广西", "value": 1458.49}, {
                    "name": "海南",
                    "value": 462.19
                }, {"name": "重庆", "value": 606.8}, {"name": "四川", "value": 2240.61}, {
                    "name": "贵州",
                    "value": 550.27
                }, {"name": "云南", "value": 1067.6}, {"name": "西藏", "value": 63.88}, {
                    "name": "陕西",
                    "value": 789.64
                }, {"name": "甘肃", "value": 497.05}, {"name": "青海", "value": 107.4}, {
                    "name": "宁夏",
                    "value": 127.25
                }, {"name": "新疆", "value": 759.74}]
            }, {
                "name": "第二产业",
                "_name": "SI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 2855.55}, {"name": "天津", "value": 3987.84}, {
                    "name": "河北",
                    "value": 8959.83
                }, {"name": "山西", "value": 3993.8}, {"name": "内蒙古", "value": 5114}, {
                    "name": "辽宁",
                    "value": 7906.34
                }, {"name": "吉林", "value": 3541.92}, {"name": "黑龙江", "value": 4060.72}, {
                    "name": "上海",
                    "value": 6001.78
                }, {"name": "江苏", "value": 18566.37}, {"name": "浙江", "value": 11908.49}, {
                    "name": "安徽",
                    "value": 4905.22
                }, {"name": "福建", "value": 6005.3}, {"name": "江西", "value": 3919.45}, {
                    "name": "山东",
                    "value": 18901.83
                }, {"name": "河南", "value": 11010.5}, {"name": "湖北", "value": 6038.08}, {
                    "name": "湖南",
                    "value": 5687.19
                }, {"name": "广东", "value": 19419.7}, {"name": "广西", "value": 3381.54}, {
                    "name": "海南",
                    "value": 443.43
                }, {"name": "重庆", "value": 3448.77}, {"name": "四川", "value": 6711.87}, {
                    "name": "贵州",
                    "value": 1476.62
                }, {"name": "云南", "value": 2582.53}, {"name": "西藏", "value": 136.63}, {
                    "name": "陕西",
                    "value": 4236.42
                }, {"name": "甘肃", "value": 1527.24}, {"name": "青海", "value": 575.33}, {
                    "name": "宁夏",
                    "value": 662.32
                }, {"name": "新疆", "value": 1929.59}]
            }, {
                "name": "第三产业",
                "_name": "TI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 9179.19}, {"name": "天津", "value": 3405.16}, {
                    "name": "河北",
                    "value": 6068.31
                }, {"name": "山西", "value": 2886.92}, {"name": "内蒙古", "value": 3696.65}, {
                    "name": "辽宁",
                    "value": 5891.25
                }, {"name": "吉林", "value": 2756.26}, {"name": "黑龙江", "value": 3371.95}, {
                    "name": "上海",
                    "value": 8930.85
                }, {"name": "江苏", "value": 13629.07}, {"name": "浙江", "value": 9918.78}, {
                    "name": "安徽",
                    "value": 3662.15
                }, {"name": "福建", "value": 5048.49}, {"name": "江西", "value": 2637.07}, {
                    "name": "山东",
                    "value": 11768.18
                }, {"name": "河南", "value": 5700.91}, {"name": "湖北", "value": 5127.12}, {
                    "name": "湖南",
                    "value": 5402.81
                }, {"name": "广东", "value": 18052.59}, {"name": "广西", "value": 2919.13}, {
                    "name": "海南",
                    "value": 748.59
                }, {"name": "重庆", "value": 2474.44}, {"name": "四川", "value": 5198.8}, {
                    "name": "贵州",
                    "value": 1885.79
                }, {"name": "云南", "value": 2519.62}, {"name": "西藏", "value": 240.85}, {
                    "name": "陕西",
                    "value": 3143.74
                }, {"name": "甘肃", "value": 1363.27}, {"name": "青海", "value": 398.54}, {
                    "name": "宁夏",
                    "value": 563.74
                }, {"name": "新疆", "value": 1587.72}]
            }]
        }, {
            "title": {"text": "2010全国宏观经济指标"},
            "series": [{
                "name": "GDP",
                "_name": "GDP",
                "data": [{"name": "北京", "value": 14113.58}, {"name": "天津", "value": 9224.46}, {
                    "name": "河北",
                    "value": 20394.26
                }, {"name": "山西", "value": 9200.86}, {"name": "内蒙古", "value": 11672}, {
                    "name": "辽宁",
                    "value": 18457.27
                }, {"name": "吉林", "value": 8667.58}, {"name": "黑龙江", "value": 10368.6}, {
                    "name": "上海",
                    "value": 17165.98
                }, {"name": "江苏", "value": 41425.48}, {"name": "浙江", "value": 27722.31}, {
                    "name": "安徽",
                    "value": 12359.33
                }, {"name": "福建", "value": 14737.12}, {"name": "江西", "value": 9451.26}, {
                    "name": "山东",
                    "value": 39169.92
                }, {"name": "河南", "value": 23092.36}, {"name": "湖北", "value": 15967.61}, {
                    "name": "湖南",
                    "value": 16037.96
                }, {"name": "广东", "value": 46013.06}, {"name": "广西", "value": 9569.85}, {
                    "name": "海南",
                    "value": 2064.5
                }, {"name": "重庆", "value": 7925.58}, {"name": "四川", "value": 17185.48}, {
                    "name": "贵州",
                    "value": 4602.16
                }, {"name": "云南", "value": 7224.18}, {"name": "西藏", "value": 507.46}, {
                    "name": "陕西",
                    "value": 10123.48
                }, {"name": "甘肃", "value": 4120.75}, {"name": "青海", "value": 1350.43}, {
                    "name": "宁夏",
                    "value": 1689.65
                }, {"name": "新疆", "value": 5437.47}]
            }, {
                "name": "金融",
                "_name": "Financial",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 1863.61}, {"name": "天津", "value": 572.99}, {
                    "name": "河北",
                    "value": 615.42
                }, {"name": "山西", "value": 448.3}, {"name": "内蒙古", "value": 346.44}, {
                    "name": "辽宁",
                    "value": 639.27
                }, {"name": "吉林", "value": 190.12}, {"name": "黑龙江", "value": 304.59}, {
                    "name": "上海",
                    "value": 1950.96
                }, {"name": "江苏", "value": 2105.92}, {"name": "浙江", "value": 2326.58}, {
                    "name": "安徽",
                    "value": 396.17
                }, {"name": "福建", "value": 767.58}, {"name": "江西", "value": 241.49}, {
                    "name": "山东",
                    "value": 1361.45
                }, {"name": "河南", "value": 697.68}, {"name": "湖北", "value": 561.27}, {
                    "name": "湖南",
                    "value": 463.16
                }, {"name": "广东", "value": 2658.76}, {"name": "广西", "value": 384.53}, {
                    "name": "海南",
                    "value": 78.12
                }, {"name": "重庆", "value": 496.56}, {"name": "四川", "value": 654.7}, {
                    "name": "贵州",
                    "value": 231.51
                }, {"name": "云南", "value": 375.08}, {"name": "西藏", "value": 27.08}, {
                    "name": "陕西",
                    "value": 384.75
                }, {"name": "甘肃", "value": 100.54}, {"name": "青海", "value": 54.53}, {
                    "name": "宁夏",
                    "value": 97.87
                }, {"name": "新疆", "value": 225.2}]
            }, {
                "name": "房地产",
                "_name": "Estate",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 1006.52}, {"name": "天津", "value": 377.59}, {
                    "name": "河北",
                    "value": 697.79
                }, {"name": "山西", "value": 192}, {"name": "内蒙古", "value": 309.25}, {
                    "name": "辽宁",
                    "value": 733.37
                }, {"name": "吉林", "value": 212.32}, {"name": "黑龙江", "value": 391.89}, {
                    "name": "上海",
                    "value": 1002.5
                }, {"name": "江苏", "value": 2600.95}, {"name": "浙江", "value": 1618.17}, {
                    "name": "安徽",
                    "value": 532.17
                }, {"name": "福建", "value": 679.03}, {"name": "江西", "value": 340.56}, {
                    "name": "山东",
                    "value": 1622.15
                }, {"name": "河南", "value": 773.23}, {"name": "湖北", "value": 564.41}, {
                    "name": "湖南",
                    "value": 464.21
                }, {"name": "广东", "value": 2813.95}, {"name": "广西", "value": 405.79}, {
                    "name": "海南",
                    "value": 188.33
                }, {"name": "重庆", "value": 266.38}, {"name": "四川", "value": 558.56}, {
                    "name": "贵州",
                    "value": 139.64
                }, {"name": "云南", "value": 223.45}, {"name": "西藏", "value": 14.54}, {
                    "name": "陕西",
                    "value": 315.95
                }, {"name": "甘肃", "value": 110.02}, {"name": "青海", "value": 25.41}, {
                    "name": "宁夏",
                    "value": 60.53
                }, {"name": "新疆", "value": 143.44}]
            }, {
                "name": "第一产业",
                "_name": "PI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 124.36}, {"name": "天津", "value": 145.58}, {
                    "name": "河北",
                    "value": 2562.81
                }, {"name": "山西", "value": 554.48}, {"name": "内蒙古", "value": 1095.28}, {
                    "name": "辽宁",
                    "value": 1631.08
                }, {"name": "吉林", "value": 1050.15}, {"name": "黑龙江", "value": 1302.9}, {
                    "name": "上海",
                    "value": 114.15
                }, {"name": "江苏", "value": 2540.1}, {"name": "浙江", "value": 1360.56}, {
                    "name": "安徽",
                    "value": 1729.02
                }, {"name": "福建", "value": 1363.67}, {"name": "江西", "value": 1206.98}, {
                    "name": "山东",
                    "value": 3588.28
                }, {"name": "河南", "value": 3258.09}, {"name": "湖北", "value": 2147}, {
                    "name": "湖南",
                    "value": 2325.5
                }, {"name": "广东", "value": 2286.98}, {"name": "广西", "value": 1675.06}, {
                    "name": "海南",
                    "value": 539.83
                }, {"name": "重庆", "value": 685.38}, {"name": "四川", "value": 2482.89}, {
                    "name": "贵州",
                    "value": 625.03
                }, {"name": "云南", "value": 1108.38}, {"name": "西藏", "value": 68.72}, {
                    "name": "陕西",
                    "value": 988.45
                }, {"name": "甘肃", "value": 599.28}, {"name": "青海", "value": 134.92}, {
                    "name": "宁夏",
                    "value": 159.29
                }, {"name": "新疆", "value": 1078.63}]
            }, {
                "name": "第二产业",
                "_name": "SI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 3388.38}, {"name": "天津", "value": 4840.23}, {
                    "name": "河北",
                    "value": 10707.68
                }, {"name": "山西", "value": 5234}, {"name": "内蒙古", "value": 6367.69}, {
                    "name": "辽宁",
                    "value": 9976.82
                }, {"name": "吉林", "value": 4506.31}, {"name": "黑龙江", "value": 5025.15}, {
                    "name": "上海",
                    "value": 7218.32
                }, {"name": "江苏", "value": 21753.93}, {"name": "浙江", "value": 14297.93}, {
                    "name": "安徽",
                    "value": 6436.62
                }, {"name": "福建", "value": 7522.83}, {"name": "江西", "value": 5122.88}, {
                    "name": "山东",
                    "value": 21238.49
                }, {"name": "河南", "value": 13226.38}, {"name": "湖北", "value": 7767.24}, {
                    "name": "湖南",
                    "value": 7343.19
                }, {"name": "广东", "value": 23014.53}, {"name": "广西", "value": 4511.68}, {
                    "name": "海南",
                    "value": 571
                }, {"name": "重庆", "value": 4359.12}, {"name": "四川", "value": 8672.18}, {
                    "name": "贵州",
                    "value": 1800.06
                }, {"name": "云南", "value": 3223.49}, {"name": "西藏", "value": 163.92}, {
                    "name": "陕西",
                    "value": 5446.1
                }, {"name": "甘肃", "value": 1984.97}, {"name": "青海", "value": 744.63}, {
                    "name": "宁夏",
                    "value": 827.91
                }, {"name": "新疆", "value": 2592.15}]
            }, {
                "name": "第三产业",
                "_name": "TI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 10600.84}, {"name": "天津", "value": 4238.65}, {
                    "name": "河北",
                    "value": 7123.77
                }, {"name": "山西", "value": 3412.38}, {"name": "内蒙古", "value": 4209.03}, {
                    "name": "辽宁",
                    "value": 6849.37
                }, {"name": "吉林", "value": 3111.12}, {"name": "黑龙江", "value": 4040.55}, {
                    "name": "上海",
                    "value": 9833.51
                }, {"name": "江苏", "value": 17131.45}, {"name": "浙江", "value": 12063.82}, {
                    "name": "安徽",
                    "value": 4193.69
                }, {"name": "福建", "value": 5850.62}, {"name": "江西", "value": 3121.4}, {
                    "name": "山东",
                    "value": 14343.14
                }, {"name": "河南", "value": 6607.89}, {"name": "湖北", "value": 6053.37}, {
                    "name": "湖南",
                    "value": 6369.27
                }, {"name": "广东", "value": 20711.55}, {"name": "广西", "value": 3383.11}, {
                    "name": "海南",
                    "value": 953.67
                }, {"name": "重庆", "value": 2881.08}, {"name": "四川", "value": 6030.41}, {
                    "name": "贵州",
                    "value": 2177.07
                }, {"name": "云南", "value": 2892.31}, {"name": "西藏", "value": 274.82}, {
                    "name": "陕西",
                    "value": 3688.93
                }, {"name": "甘肃", "value": 1536.5}, {"name": "青海", "value": 470.88}, {
                    "name": "宁夏",
                    "value": 702.45
                }, {"name": "新疆", "value": 1766.69}]
            }]
        }, {
            "title": {"text": "2011全国宏观经济指标"},
            "series": [{
                "name": "GDP",
                "_name": "GDP",
                "data": [{"name": "北京", "value": 16251.93}, {"name": "天津", "value": 11307.28}, {
                    "name": "河北",
                    "value": 24515.76
                }, {"name": "山西", "value": 11237.55}, {"name": "内蒙古", "value": 14359.88}, {
                    "name": "辽宁",
                    "value": 22226.7
                }, {"name": "吉林", "value": 10568.83}, {"name": "黑龙江", "value": 12582}, {
                    "name": "上海",
                    "value": 19195.69
                }, {"name": "江苏", "value": 49110.27}, {"name": "浙江", "value": 32318.85}, {
                    "name": "安徽",
                    "value": 15300.65
                }, {"name": "福建", "value": 17560.18}, {"name": "江西", "value": 11702.82}, {
                    "name": "山东",
                    "value": 45361.85
                }, {"name": "河南", "value": 26931.03}, {"name": "湖北", "value": 19632.26}, {
                    "name": "湖南",
                    "value": 19669.56
                }, {"name": "广东", "value": 53210.28}, {"name": "广西", "value": 11720.87}, {
                    "name": "海南",
                    "value": 2522.66
                }, {"name": "重庆", "value": 10011.37}, {"name": "四川", "value": 21026.68}, {
                    "name": "贵州",
                    "value": 5701.84
                }, {"name": "云南", "value": 8893.12}, {"name": "西藏", "value": 605.83}, {
                    "name": "陕西",
                    "value": 12512.3
                }, {"name": "甘肃", "value": 5020.37}, {"name": "青海", "value": 1670.44}, {
                    "name": "宁夏",
                    "value": 2102.21
                }, {"name": "新疆", "value": 6610.05}]
            }, {
                "name": "金融",
                "_name": "Financial",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 2215.41}, {"name": "天津", "value": 756.5}, {
                    "name": "河北",
                    "value": 746.01
                }, {"name": "山西", "value": 519.32}, {"name": "内蒙古", "value": 447.46}, {
                    "name": "辽宁",
                    "value": 755.57
                }, {"name": "吉林", "value": 207.65}, {"name": "黑龙江", "value": 370.78}, {
                    "name": "上海",
                    "value": 2277.4
                }, {"name": "江苏", "value": 2600.11}, {"name": "浙江", "value": 2730.29}, {
                    "name": "安徽",
                    "value": 503.85
                }, {"name": "福建", "value": 862.41}, {"name": "江西", "value": 357.44}, {
                    "name": "山东",
                    "value": 1640.41
                }, {"name": "河南", "value": 868.2}, {"name": "湖北", "value": 674.57}, {
                    "name": "湖南",
                    "value": 501.09
                }, {"name": "广东", "value": 2916.13}, {"name": "广西", "value": 445.37}, {
                    "name": "海南",
                    "value": 105.24
                }, {"name": "重庆", "value": 704.66}, {"name": "四川", "value": 868.15}, {
                    "name": "贵州",
                    "value": 297.27
                }, {"name": "云南", "value": 456.23}, {"name": "西藏", "value": 31.7}, {
                    "name": "陕西",
                    "value": 432.11
                }, {"name": "甘肃", "value": 145.05}, {"name": "青海", "value": 62.56}, {
                    "name": "宁夏",
                    "value": 134.18
                }, {"name": "新疆", "value": 288.77}]
            }, {
                "name": "房地产",
                "_name": "Estate",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 1074.93}, {"name": "天津", "value": 411.46}, {
                    "name": "河北",
                    "value": 918.02
                }, {"name": "山西", "value": 224.91}, {"name": "内蒙古", "value": 384.76}, {
                    "name": "辽宁",
                    "value": 876.12
                }, {"name": "吉林", "value": 238.61}, {"name": "黑龙江", "value": 492.1}, {
                    "name": "上海",
                    "value": 1019.68
                }, {"name": "江苏", "value": 2747.89}, {"name": "浙江", "value": 1677.13}, {
                    "name": "安徽",
                    "value": 634.92
                }, {"name": "福建", "value": 911.16}, {"name": "江西", "value": 402.51}, {
                    "name": "山东",
                    "value": 1838.14
                }, {"name": "河南", "value": 987}, {"name": "湖北", "value": 634.67}, {
                    "name": "湖南",
                    "value": 518.04
                }, {"name": "广东", "value": 3321.31}, {"name": "广西", "value": 465.68}, {
                    "name": "海南",
                    "value": 208.71
                }, {"name": "重庆", "value": 396.28}, {"name": "四川", "value": 620.62}, {
                    "name": "贵州",
                    "value": 160.3
                }, {"name": "云南", "value": 222.31}, {"name": "西藏", "value": 17.44}, {
                    "name": "陕西",
                    "value": 398.03
                }, {"name": "甘肃", "value": 134.25}, {"name": "青海", "value": 29.05}, {
                    "name": "宁夏",
                    "value": 79.01
                }, {"name": "新疆", "value": 176.22}]
            }, {
                "name": "第一产业",
                "_name": "PI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 136.27}, {"name": "天津", "value": 159.72}, {
                    "name": "河北",
                    "value": 2905.73
                }, {"name": "山西", "value": 641.42}, {"name": "内蒙古", "value": 1306.3}, {
                    "name": "辽宁",
                    "value": 1915.57
                }, {"name": "吉林", "value": 1277.44}, {"name": "黑龙江", "value": 1701.5}, {
                    "name": "上海",
                    "value": 124.94
                }, {"name": "江苏", "value": 3064.78}, {"name": "浙江", "value": 1583.04}, {
                    "name": "安徽",
                    "value": 2015.31
                }, {"name": "福建", "value": 1612.24}, {"name": "江西", "value": 1391.07}, {
                    "name": "山东",
                    "value": 3973.85
                }, {"name": "河南", "value": 3512.24}, {"name": "湖北", "value": 2569.3}, {
                    "name": "湖南",
                    "value": 2768.03
                }, {"name": "广东", "value": 2665.2}, {"name": "广西", "value": 2047.23}, {
                    "name": "海南",
                    "value": 659.23
                }, {"name": "重庆", "value": 844.52}, {"name": "四川", "value": 2983.51}, {
                    "name": "贵州",
                    "value": 726.22
                }, {"name": "云南", "value": 1411.01}, {"name": "西藏", "value": 74.47}, {
                    "name": "陕西",
                    "value": 1220.9
                }, {"name": "甘肃", "value": 678.75}, {"name": "青海", "value": 155.08}, {
                    "name": "宁夏",
                    "value": 184.14
                }, {"name": "新疆", "value": 1139.03}]
            }, {
                "name": "第二产业",
                "_name": "SI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 3752.48}, {"name": "天津", "value": 5928.32}, {
                    "name": "河北",
                    "value": 13126.86
                }, {"name": "山西", "value": 6635.26}, {"name": "内蒙古", "value": 8037.69}, {
                    "name": "辽宁",
                    "value": 12152.15
                }, {"name": "吉林", "value": 5611.48}, {"name": "黑龙江", "value": 5962.41}, {
                    "name": "上海",
                    "value": 7927.89
                }, {"name": "江苏", "value": 25203.28}, {"name": "浙江", "value": 16555.58}, {
                    "name": "安徽",
                    "value": 8309.38
                }, {"name": "福建", "value": 9069.2}, {"name": "江西", "value": 6390.55}, {
                    "name": "山东",
                    "value": 24017.11
                }, {"name": "河南", "value": 15427.08}, {"name": "湖北", "value": 9815.94}, {
                    "name": "湖南",
                    "value": 9361.99
                }, {"name": "广东", "value": 26447.38}, {"name": "广西", "value": 5675.32}, {
                    "name": "海南",
                    "value": 714.5
                }, {"name": "重庆", "value": 5543.04}, {"name": "四川", "value": 11029.13}, {
                    "name": "贵州",
                    "value": 2194.33
                }, {"name": "云南", "value": 3780.32}, {"name": "西藏", "value": 208.79}, {
                    "name": "陕西",
                    "value": 6935.59
                }, {"name": "甘肃", "value": 2377.83}, {"name": "青海", "value": 975.18}, {
                    "name": "宁夏",
                    "value": 1056.15
                }, {"name": "新疆", "value": 3225.9}]
            }, {
                "name": "第三产业",
                "_name": "TI",
                "yAxisIndex": 1,
                "data": [{"name": "北京", "value": 12363.18}, {"name": "天津", "value": 5219.24}, {
                    "name": "河北",
                    "value": 8483.17
                }, {"name": "山西", "value": 3960.87}, {"name": "内蒙古", "value": 5015.89}, {
                    "name": "辽宁",
                    "value": 8158.98
                }, {"name": "吉林", "value": 3679.91}, {"name": "黑龙江", "value": 4918.09}, {
                    "name": "上海",
                    "value": 11142.86
                }, {"name": "江苏", "value": 20842.21}, {"name": "浙江", "value": 14180.23}, {
                    "name": "安徽",
                    "value": 4975.96
                }, {"name": "福建", "value": 6878.74}, {"name": "江西", "value": 3921.2}, {
                    "name": "山东",
                    "value": 17370.89
                }, {"name": "河南", "value": 7991.72}, {"name": "湖北", "value": 7247.02}, {
                    "name": "湖南",
                    "value": 7539.54
                }, {"name": "广东", "value": 24097.7}, {"name": "广西", "value": 3998.33}, {
                    "name": "海南",
                    "value": 1148.93
                }, {"name": "重庆", "value": 3623.81}, {"name": "四川", "value": 7014.04}, {
                    "name": "贵州",
                    "value": 2781.29
                }, {"name": "云南", "value": 3701.79}, {"name": "西藏", "value": 322.57}, {
                    "name": "陕西",
                    "value": 4355.81
                }, {"name": "甘肃", "value": 1963.79}, {"name": "青海", "value": 540.18}, {
                    "name": "宁夏",
                    "value": 861.92
                }, {"name": "新疆", "value": 2245.12}]
            }]
        }
    ]
};

optionMap.timeline2 = {
    "timeline": {
        data: ["2002-01-01", "2003-01-01", "2004-01-01", "2005-01-01", "2006-01-01", "2007-01-01", "2008-01-01", "2009-01-01", "2010-01-01", "2011-01-01"],
        label: {
            formatter: function (s) {
                return s.slice(0, 4);
            }
        },
        playInterval: 1000
    },
    "options": [{
        "title": {"text": "人均GDP", "subtext": "数据来自国家统计局", "x": "left", "textStyle": {}},
        "tooltip": {"trigger": "item"},
        "dataRange": {
            "min": 0,
            "max": 8300,
            "text": ["高", "低"],
            "calculable": true,
            "x": "left",
            "color": ["#1e90ff", "rgb(232,243,255)"]
        },
        "series": [{
            "type": "map",
            "mapType": "china",
            "mapLocation": {"y": "top", "height": 340},
            "itemStyle": {"normal": {"label": {"show": true}}},
            "name": "人均GDP(2002)",
            "data": [{"name": "北京", "value": 3032.326072}, {"name": "天津", "value": 2135.809335}, {
                "name": "河北",
                "value": 893.5827765
            }, {"name": "山西", "value": 705.7680631}, {"name": "内蒙古", "value": 814.1526846}, {
                "name": "辽宁",
                "value": 1298.648584
            }, {"name": "吉林", "value": 870.1519081}, {"name": "黑龙江", "value": 953.8945712}, {
                "name": "上海",
                "value": 3351.447752
            }, {"name": "江苏", "value": 1432.196867}, {"name": "浙江", "value": 1675.810302}, {
                "name": "安徽",
                "value": 572.8710938
            }, {"name": "福建", "value": 1285.256041}, {"name": "江西", "value": 580.4073899}, {
                "name": "山东",
                "value": 1131.413786
            }, {"name": "河南", "value": 627.8456257}, {"name": "湖北", "value": 742.7397743}, {
                "name": "湖南",
                "value": 626.2694222
            }, {"name": "广东", "value": 1527.077584}, {"name": "广西", "value": 523.3782663}, {
                "name": "海南",
                "value": 800.4109589
            }, {"name": "重庆", "value": 793.4825871}, {"name": "四川", "value": 582.6152898}, {
                "name": "贵州",
                "value": 324.0630701
            }, {"name": "云南", "value": 533.7687514}, {"name": "西藏", "value": 604.6268657}, {
                "name": "陕西",
                "value": 615.3440743
            }, {"name": "甘肃", "value": 486.7759779}, {"name": "青海", "value": 643.9508507}, {
                "name": "宁夏",
                "value": 659.3706294
            }, {"name": "新疆", "value": 846.5354331}]
        }]
    }, {
        "title": {"text": "2003人均GDP"},
        "series": [{
            "type": "map",
            "mapType": "china",
            "itemStyle": {"normal": {"label": {"show": true}}},
            "name": "人均GDP(2003)",
            "data": [{"name": "北京", "value": 3439.017857}, {"name": "天津", "value": 2549.980218}, {
                "name": "河北",
                "value": 1022.498153
            }, {"name": "山西", "value": 861.5660833}, {"name": "内蒙古", "value": 1000.997485}, {
                "name": "辽宁",
                "value": 1425.781473
            }, {"name": "吉林", "value": 984.4970414}, {"name": "黑龙江", "value": 1063.538663}, {
                "name": "上海",
                "value": 3790.617214
            }, {"name": "江苏", "value": 1668.39233}, {"name": "浙江", "value": 1998.151122}, {
                "name": "安徽",
                "value": 636.5584942
            }, {"name": "福建", "value": 1423.092519}, {"name": "江西", "value": 659.9459332}, {
                "name": "山东",
                "value": 1323.632877
            }, {"name": "河南", "value": 710.4272266}, {"name": "湖北", "value": 836.8425682}, {
                "name": "湖南",
                "value": 699.3831607
            }, {"name": "广东", "value": 1767.783108}, {"name": "广西", "value": 580.8338481}, {
                "name": "海南",
                "value": 880.3452528
            }, {"name": "重庆", "value": 911.7802355}, {"name": "四川", "value": 652.2859589}, {
                "name": "贵州",
                "value": 368.5633075
            }, {"name": "云南", "value": 584.0996344}, {"name": "西藏", "value": 680.4779412}, {
                "name": "陕西",
                "value": 704.7167756
            }, {"name": "甘肃", "value": 551.7658652}, {"name": "青海", "value": 730.7116105}, {
                "name": "宁夏",
                "value": 767.862069
            }, {"name": "新疆", "value": 975.3619442}]
        }]
    }, {
        "title": {"text": "2004人均GDP"},
        "series": [{
            "type": "map",
            "mapType": "china",
            "itemStyle": {"normal": {"label": {"show": true}}},
            "name": "人均GDP(2004)",
            "data": [{"name": "北京", "value": 4040.997991}, {"name": "天津", "value": 3038.056641}, {
                "name": "河北",
                "value": 1245.062417
            }, {"name": "山西", "value": 1070.875562}, {"name": "内蒙古", "value": 1270.819056}, {
                "name": "辽宁",
                "value": 1582.167418
            }, {"name": "吉林", "value": 1152.458472}, {"name": "黑龙江", "value": 1244.589992}, {
                "name": "上海",
                "value": 4399.362398
            }, {"name": "江苏", "value": 1994.363951}, {"name": "浙江", "value": 2365.218274}, {
                "name": "安徽",
                "value": 764.1779062
            }, {"name": "福建", "value": 1633.1397}, {"name": "江西", "value": 806.8860878}, {
                "name": "山东",
                "value": 1636.366013
            }, {"name": "河南", "value": 880.2912422}, {"name": "湖北", "value": 988.6346086}, {
                "name": "湖南",
                "value": 842.3320394
            }, {"name": "广东", "value": 2070.532324}, {"name": "广西", "value": 702.290857}, {
                "name": "海南",
                "value": 1002.02934
            }, {"name": "重庆", "value": 1086.494808}, {"name": "四川", "value": 788.5822002}, {
                "name": "贵州",
                "value": 429.7643443
            }, {"name": "云南", "value": 698.0543601}, {"name": "西藏", "value": 798.3333333}, {
                "name": "陕西",
                "value": 862.6949199
            }, {"name": "甘肃", "value": 664.498229}, {"name": "青海", "value": 864.7495362}, {
                "name": "宁夏",
                "value": 913.452381
            }, {"name": "新疆", "value": 1125.364238}]
        }]
    }, {
        "title": {"text": "2005人均GDP"},
        "series": [{
            "type": "map",
            "mapType": "china",
            "itemStyle": {"normal": {"label": {"show": true}}},
            "name": "人均GDP(2005)",
            "data": [{"name": "北京", "value": 4531.547464}, {"name": "天津", "value": 3744.621285}, {
                "name": "河北",
                "value": 1461.408553
            }, {"name": "山西", "value": 1260.962742}, {"name": "内蒙古", "value": 1625.064503}, {
                "name": "辽宁",
                "value": 1906.481876
            }, {"name": "吉林", "value": 1332.941826}, {"name": "黑龙江", "value": 1443.376963}, {
                "name": "上海",
                "value": 4892.941799
            }, {"name": "江苏", "value": 2451.066157}, {"name": "浙江", "value": 2688.375075}, {
                "name": "安徽",
                "value": 874.2107843
            }, {"name": "福建", "value": 1842.757942}, {"name": "江西", "value": 941.0252842}, {
                "name": "山东",
                "value": 1986.036981
            }, {"name": "河南", "value": 1128.722814}, {"name": "湖北", "value": 1154.148862}, {
                "name": "湖南",
                "value": 1042.696807
            }, {"name": "广东", "value": 2453.488144}, {"name": "广西", "value": 854.9570815}, {
                "name": "海南",
                "value": 1109.601449
            }, {"name": "重庆", "value": 1239.356683}, {"name": "四川", "value": 899.3058938}, {
                "name": "贵州",
                "value": 537.6461126
            }, {"name": "云南", "value": 778.141573}, {"name": "西藏", "value": 888.5714286}, {
                "name": "陕西",
                "value": 1066.04878
            }, {"name": "甘肃", "value": 759.913556}, {"name": "青海", "value": 1000.589319}, {
                "name": "宁夏",
                "value": 1027.869128
            }, {"name": "新疆", "value": 1295.616915}]
        }]
    }, {
        "title": {"text": "2006人均GDP"},
        "series": [{
            "type": "map",
            "mapType": "china",
            "itemStyle": {"normal": {"label": {"show": true}}},
            "name": "人均GDP(2006)",
            "data": [{"name": "北京", "value": 5070.443473}, {"name": "天津", "value": 4151.386047}, {
                "name": "河北",
                "value": 1662.452885
            }, {"name": "山西", "value": 1445.514074}, {"name": "内蒙古", "value": 2047.308489}, {
                "name": "辽宁",
                "value": 2178.534301
            }, {"name": "吉林", "value": 1570.003672}, {"name": "黑龙江", "value": 1624.849595}, {
                "name": "上海",
                "value": 5383.014257
            }, {"name": "江苏", "value": 2839.87069}, {"name": "浙江", "value": 3099.067429}, {
                "name": "安徽",
                "value": 1000.409165
            }, {"name": "福建", "value": 2115.439331}, {"name": "江西", "value": 1110.977184}, {
                "name": "山东",
                "value": 2352.582447
            }, {"name": "河南", "value": 1316.31069}, {"name": "湖北", "value": 1338.041454}, {
                "name": "湖南",
                "value": 1212.341533
            }, {"name": "广东", "value": 2815.90341}, {"name": "广西", "value": 1005.755457}, {
                "name": "海南",
                "value": 1274.72488
            }, {"name": "重庆", "value": 1391.463675}, {"name": "四川", "value": 1063.807076}, {
                "name": "贵州",
                "value": 633.8699187
            }, {"name": "云南", "value": 889.6140977}, {"name": "西藏", "value": 1020.210526}, {
                "name": "陕西",
                "value": 1282.403352
            }, {"name": "甘肃", "value": 894.1303494}, {"name": "青海", "value": 1183.394161}, {
                "name": "宁夏",
                "value": 1201.821192
            }, {"name": "新疆", "value": 1485.492683}]
        }]
    }, {
        "title": {"text": "2007人均GDP"},
        "series": [{
            "type": "map",
            "mapType": "china",
            "itemStyle": {"normal": {"label": {"show": true}}},
            "name": "人均GDP(2007)",
            "data": [{"name": "北京", "value": 5875.184964}, {"name": "天津", "value": 4710.995516}, {
                "name": "河北",
                "value": 1959.861731
            }, {"name": "山西", "value": 1775.552608}, {"name": "内蒙古", "value": 2644.37217}, {
                "name": "辽宁",
                "value": 2597.557003
            }, {"name": "吉林", "value": 1935.783883}, {"name": "黑龙江", "value": 1857.740586}, {
                "name": "上海",
                "value": 6053.299419
            }, {"name": "江苏", "value": 3368.960249}, {"name": "浙江", "value": 3637.968962}, {
                "name": "安徽",
                "value": 1203.157895
            }, {"name": "福建", "value": 2560.501107}, {"name": "江西", "value": 1327.896062}, {
                "name": "山东",
                "value": 2751.885342
            }, {"name": "河南", "value": 1603.895299}, {"name": "湖北", "value": 1637.725917}, {
                "name": "湖南",
                "value": 1485.381589
            }, {"name": "广东", "value": 3289.545549}, {"name": "广西", "value": 1221.352768}, {
                "name": "海南",
                "value": 1484.224852
            }, {"name": "重庆", "value": 1660.557528}, {"name": "四川", "value": 1299.666544}, {
                "name": "贵州",
                "value": 794.0831498
            }, {"name": "云南", "value": 1057.270713}, {"name": "西藏", "value": 1181.418685}, {
                "name": "陕西",
                "value": 1552.667206
            }, {"name": "甘肃", "value": 1061.216641}, {"name": "青海", "value": 1444.474638}, {
                "name": "宁夏",
                "value": 1506.737705
            }, {"name": "新疆", "value": 1681.699284}]
        }]
    }, {
        "title": {"text": "2008人均GDP"},
        "series": [{
            "type": "map",
            "mapType": "china",
            "itemStyle": {"normal": {"label": {"show": true}}},
            "name": "人均GDP(2008)",
            "data": [{"name": "北京", "value": 6276.115189}, {"name": "天津", "value": 5713.443878}, {
                "name": "河北",
                "value": 2291.024467
            }, {"name": "山西", "value": 2144.649663}, {"name": "内蒙古", "value": 3476.350245}, {
                "name": "辽宁",
                "value": 3167.689455
            }, {"name": "吉林", "value": 2350.438917}, {"name": "黑龙江", "value": 2173.691503}, {
                "name": "上海",
                "value": 6571.63475
            }, {"name": "江苏", "value": 3991.49446}, {"name": "浙江", "value": 4117.937452}, {
                "name": "安徽",
                "value": 1442.813366
            }, {"name": "福建", "value": 2974.171476}, {"name": "江西", "value": 1584.329545}, {
                "name": "山东",
                "value": 3284.833811
            }, {"name": "河南", "value": 1910.96935}, {"name": "湖北", "value": 1983.701628}, {
                "name": "湖南",
                "value": 1811.128527
            }, {"name": "广东", "value": 3719.469322}, {"name": "广西", "value": 1457.848837}, {
                "name": "海南",
                "value": 1760.023419
            }, {"name": "重庆", "value": 2040.739697}, {"name": "四川", "value": 1548.443106}, {
                "name": "贵州",
                "value": 990.4226919
            }, {"name": "云南", "value": 1252.942989}, {"name": "西藏", "value": 1352.226027}, {
                "name": "陕西",
                "value": 1967.342657
            }, {"name": "甘肃", "value": 1241.403371}, {"name": "青海", "value": 1838.66426}, {
                "name": "宁夏",
                "value": 1948.090615
            }, {"name": "新疆", "value": 1963.026748}]
        }]
    }, {
        "title": {"text": "2009人均GDP"},
        "series": [{
            "type": "map",
            "mapType": "china",
            "itemStyle": {"normal": {"label": {"show": true}}},
            "name": "人均GDP(2009)",
            "data": [{"name": "北京", "value": 6533.887097}, {"name": "天津", "value": 6125.285016}, {
                "name": "河北",
                "value": 2450.309923
            }, {"name": "山西", "value": 2147.157864}, {"name": "内蒙古", "value": 3962.672905}, {
                "name": "辽宁",
                "value": 3504.374568
            }, {"name": "吉林", "value": 2656.478102}, {"name": "黑龙江", "value": 2244.380554}, {
                "name": "上海",
                "value": 6808.348416
            }, {"name": "江苏", "value": 4411.946223}, {"name": "浙江", "value": 4357.534117}, {
                "name": "安徽",
                "value": 1641.301582
            }, {"name": "福建", "value": 3337.842335}, {"name": "江西", "value": 1727.251805}, {
                "name": "山东",
                "value": 3579.3717
            }, {"name": "河南", "value": 2053.384632}, {"name": "湖北", "value": 2265.926573}, {
                "name": "湖南",
                "value": 2038.665314
            }, {"name": "广东", "value": 3897.587364}, {"name": "广西", "value": 1597.850082}, {
                "name": "海南",
                "value": 1914.594907
            }, {"name": "重庆", "value": 2284.018888}, {"name": "四川", "value": 1728.928528}, {
                "name": "贵州",
                "value": 1106.214306
            }, {"name": "云南", "value": 1349.759352}, {"name": "西藏", "value": 1491.081081}, {
                "name": "陕西",
                "value": 2192.057955
            }, {"name": "甘肃", "value": 1325.855186}, {"name": "青海", "value": 1941.238779}, {
                "name": "宁夏",
                "value": 2165.296
            }, {"name": "新疆", "value": 1981.032886}]
        }]
    }, {
        "title": {"text": "2010人均GDP"},
        "series": [{
            "type": "map",
            "mapType": "china",
            "itemStyle": {"normal": {"label": {"show": true}}},
            "name": "人均GDP(2010)",
            "data": [{"name": "北京", "value": 7193.465851}, {"name": "天津", "value": 7101.200924}, {
                "name": "河北",
                "value": 2834.898527
            }, {"name": "山西", "value": 2574.387241}, {"name": "内蒙古", "value": 4721.682848}, {
                "name": "辽宁",
                "value": 4218.804571
            }, {"name": "吉林", "value": 3155.289407}, {"name": "黑龙江", "value": 2705.087399}, {
                "name": "上海",
                "value": 7453.747286
            }, {"name": "江苏", "value": 5264.389376}, {"name": "浙江", "value": 5089.463925}, {
                "name": "安徽",
                "value": 2074.757428
            }, {"name": "福建", "value": 3990.555104}, {"name": "江西", "value": 2118.166741}, {
                "name": "山东",
                "value": 4085.306633
            }, {"name": "河南", "value": 2455.328017}, {"name": "湖北", "value": 2787.641411}, {
                "name": "湖南",
                "value": 2441.089802
            }, {"name": "广东", "value": 4406.959104}, {"name": "广西", "value": 2075.889371}, {
                "name": "海南",
                "value": 2375.719217
            }, {"name": "重庆", "value": 2747.168111}, {"name": "四川", "value": 2136.169049}, {
                "name": "贵州",
                "value": 1322.839897
            }, {"name": "云南", "value": 1569.791395}, {"name": "西藏", "value": 1691.533333}, {
                "name": "陕西",
                "value": 2710.436412
            }, {"name": "甘肃", "value": 1609.667969}, {"name": "青海", "value": 2398.632327}, {
                "name": "宁夏",
                "value": 2669.273302
            }, {"name": "新疆", "value": 2488.544622}]
        }]
    }, {
        "title": {"text": "2011人均GDP"},
        "series": [{
            "type": "map",
            "mapType": "china",
            "itemStyle": {"normal": {"label": {"show": true}}},
            "name": "人均GDP(2011)",
            "data": [{"name": "北京", "value": 8049.494799}, {"name": "天津", "value": 8344.856089}, {
                "name": "河北",
                "value": 3385.68706
            }, {"name": "山西", "value": 3127.623156}, {"name": "内蒙古", "value": 5785.60838}, {
                "name": "辽宁",
                "value": 5071.115674
            }, {"name": "吉林", "value": 3844.608949}, {"name": "黑龙江", "value": 3281.690141}, {
                "name": "上海",
                "value": 8178.81977
            }, {"name": "江苏", "value": 6217.27687}, {"name": "浙江", "value": 5915.952773}, {
                "name": "安徽",
                "value": 2563.781836
            }, {"name": "福建", "value": 4720.478495}, {"name": "江西", "value": 2607.580214}, {
                "name": "山东",
                "value": 4707.050949
            }, {"name": "河南", "value": 2868.665317}, {"name": "湖北", "value": 3409.562348}, {
                "name": "湖南",
                "value": 2982.043663
            }, {"name": "广东", "value": 5065.233698}, {"name": "广西", "value": 2523.330463}, {
                "name": "海南",
                "value": 2876.465222
            }, {"name": "重庆", "value": 3429.725934}, {"name": "四川", "value": 2612.009938}, {
                "name": "贵州",
                "value": 1643.655232
            }, {"name": "云南", "value": 1920.345498}, {"name": "西藏", "value": 1999.438944}, {
                "name": "陕西",
                "value": 3342.853326
            }, {"name": "甘肃", "value": 1958.022621}, {"name": "青海", "value": 2940.915493}, {
                "name": "宁夏",
                "value": 3289.843505
            }, {"name": "新疆", "value": 2992.326845}]
        }]
    }]
}

/*
 optionMap.timeline1 ={
 "timeline":{
 "data":[
 "2002-01-01","2003-01-01","2004-01-01","2005-01-01","2006-01-01",
 "2007-01-01","2008-01-01","2009-01-01","2010-01-01","2011-01-01"
 ],
 "label":{},
 "playInterval":1000
 },
 "options":[
 {
 "color":[
 "#87cefa","#ff7f50","#da70d6","#32cd32","#6495ed","#ff69b4","#ba55d3","#cd5c5c","#ffa500","#40e0d0","#1e90ff","#ff6347","#7b68ee","#00fa9a","#ffd700","#6699FF","#ff6666","#3cb371","#b8860b","#30e0e0"
 ],
 "title":{"subtext":"数据来自国家统计局","text":"2002全国宏观经济指标"},
 "tooltip":{"trigger":"axis"},
 "legend":{
 "data":["GDP","金融","房地产","第一产业","第二产业","第三产业"],
 "selected":{"GDP":true,"金融":false,"房地产":true,"第一产业":false,"第二产业":false,"第三产业":false}
 },
 "toolbox":{
 "show":true,
 "feature":{
 "mark":{"show":true},
 "dataView":{"show":true,"readOnly":false},
 "magicType":{"show":true,"type":["line","bar","stack","tiled"]},
 "restore":{"show":true},
 "saveAsImage":{"show":true}
 }
 },
 "calculable":true,
 "grid":{"y":80,"y2":100},
 "xAxis":[{"type":"category","axisLabel":{"interval":0},"data":["北京","\n天津","河北","\n山西","内蒙古","\n辽宁","吉林","\n黑龙江","上海","\n江苏","浙江","\n安徽","福建","\n江西","山东","\n河南","湖北","\n湖南","广东","\n广西","海南","\n重庆","四川","\n贵州","云南","\n西藏","陕西","\n甘肃","青海","\n宁夏","新疆"]}],
 "yAxis":[{"type":"value","name":"GDP（亿元）","max":53500,"splitArea":{"show":true}},{"type":"value","name":"其他（亿元）","splitArea":{"show":true}}],
 "series":[
 {"name":"GDP","_name":"GDP","type":"bar","markLine":{"itemStyle":{"normal":{"lineStyle":{"color":"orange"}}},"data":[{"type":"average","name":"平均值"}]},"data":[{"name":"北京","value":4315},{"name":"天津","value":2150.76},{"name":"河北","value":6018.28},{"name":"山西","value":2324.8},{"name":"内蒙古","value":1940.94},{"name":"辽宁","value":5458.22},{"name":"吉林","value":2348.54},{"name":"黑龙江","value":3637.2},{"name":"上海","value":5741.03},{"name":"江苏","value":10606.85},{"name":"浙江","value":8003.67},{"name":"安徽","value":3519.72},{"name":"福建","value":4467.55},{"name":"江西","value":2450.48},{"name":"山东","value":10275.5},{"name":"河南","value":6035.48},{"name":"湖北","value":4212.82},{"name":"湖南","value":4151.54},{"name":"广东","value":13502.42},{"name":"广西","value":2523.73},{"name":"海南","value":642.73},{"name":"重庆","value":2232.86},{"name":"四川","value":4725.01},{"name":"贵州","value":1243.43},{"name":"云南","value":2312.82},{"name":"西藏","value":162.04},{"name":"陕西","value":2253.39},{"name":"甘肃","value":1232.03},{"name":"青海","value":340.65},{"name":"宁夏","value":377.16},{"name":"新疆","value":1612.6}]},{"name":"金融","_name":"Financial","yAxisIndex":1,"type":"bar","data":[{"name":"北京","value":561.91},{"name":"天津","value":76.86},{"name":"河北","value":179.6},{"name":"山西","value":124.1},{"name":"内蒙古","value":48.39},{"name":"辽宁","value":137.18},{"name":"吉林","value":75.45},{"name":"黑龙江","value":31.6},{"name":"上海","value":485.25},{"name":"江苏","value":368.86},{"name":"浙江","value":347.53},{"name":"安徽","value":81.85},{"name":"福建","value":138.28},{"name":"江西","value":76.51},{"name":"山东","value":310.07},{"name":"河南","value":158.77},{"name":"湖北","value":96.95},{"name":"湖南","value":92.43},{"name":"广东","value":454.65},{"name":"广西","value":35.86},{"name":"海南","value":10.08},{"name":"重庆","value":134.52},{"name":"四川","value":183.13},{"name":"贵州","value":41.45},{"name":"云南","value":102.39},{"name":"西藏","value":2.81},{"name":"陕西","value":67.3},{"name":"甘肃","value":42.08},{"name":"青海","value":16.75},{"name":"宁夏","value":21.45},{"name":"新疆","value":52.18}]},{"name":"房地产","_name":"Estate","yAxisIndex":1,"type":"bar","data":[{"name":"北京","value":298.02},{"name":"天津","value":73.04},{"name":"河北","value":140.89},{"name":"山西","value":65.83},{"name":"内蒙古","value":51.48},{"name":"辽宁","value":130.94},{"name":"吉林","value":76.11},{"name":"黑龙江","value":118.7},{"name":"上海","value":384.86},{"name":"江苏","value":371.09},{"name":"浙江","value":360.63},{"name":"安徽","value":139.18},{"name":"福建","value":188.09},{"name":"江西","value":125.27},{"name":"山东","value":371.13},{"name":"河南","value":199.31},{"name":"湖北","value":145.17},{"name":"湖南","value":165.29},{"name":"广东","value":808.16},{"name":"广西","value":82.83},{"name":"海南","value":21.45},{"name":"重庆","value":90.48},{"name":"四川","value":210.82},{"name":"贵州","value":53.49},{"name":"云南","value":95.68},{"name":"西藏","value":3.42},{"name":"陕西","value":77.68},{"name":"甘肃","value":41.52},{"name":"青海","value":9.74},{"name":"宁夏","value":13.46},{"name":"新疆","value":43.04}]},{"name":"第一产业","_name":"PI","yAxisIndex":1,"type":"bar","data":[{"name":"北京","value":82.44},{"name":"天津","value":84.21},{"name":"河北","value":956.84},{"name":"山西","value":197.8},{"name":"内蒙古","value":374.69},{"name":"辽宁","value":590.2},{"name":"吉林","value":446.17},{"name":"黑龙江","value":474.2},{"name":"上海","value":79.68},{"name":"江苏","value":1110.44},{"name":"浙江","value":685.2},{"name":"安徽","value":783.66},{"name":"福建","value":664.78},{"name":"江西","value":535.98},{"name":"山东","value":1390},{"name":"河南","value":1288.36},{"name":"湖北","value":707},{"name":"湖南","value":847.25},{"name":"广东","value":1015.08},{"name":"广西","value":601.99},{"name":"海南","value":222.89},{"name":"重庆","value":317.87},{"name":"四川","value":1047.95},{"name":"贵州","value":281.1},{"name":"云南","value":463.44},{"name":"西藏","value":39.75},{"name":"陕西","value":282.21},{"name":"甘肃","value":215.51},{"name":"青海","value":47.31},{"name":"宁夏","value":52.95},{"name":"新疆","value":305}]},{"name":"第二产业","_name":"SI","yAxisIndex":1,"type":"bar","data":[{"name":"北京","value":1249.99},{"name":"天津","value":1069.08},{"name":"河北","value":2911.69},{"name":"山西","value":1134.31},{"name":"内蒙古","value":754.78},{"name":"辽宁","value":2609.85},{"name":"吉林","value":943.49},{"name":"黑龙江","value":1843.6},{"name":"上海","value":2622.45},{"name":"江苏","value":5604.49},{"name":"浙江","value":4090.48},{"name":"安徽","value":1337.04},{"name":"福建","value":2036.97},{"name":"江西","value":941.77},{"name":"山东","value":5184.98},{"name":"河南","value":2768.75},{"name":"湖北","value":1709.89},{"name":"湖南","value":1523.5},{"name":"广东","value":6143.4},{"name":"广西","value":846.89},{"name":"海南","value":148.88},{"name":"重庆","value":958.87},{"name":"四川","value":1733.38},{"name":"贵州","value":481.96},{"name":"云南","value":934.88},{"name":"西藏","value":32.72},{"name":"陕西","value":1007.56},{"name":"甘肃","value":501.69},{"name":"青海","value":144.51},{"name":"宁夏","value":153.06},{"name":"新疆","value":603.15}]},{"name":"第三产业","_name":"TI","yAxisIndex":1,"type":"bar","data":[{"name":"北京","value":2982.57},{"name":"天津","value":997.47},{"name":"河北","value":2149.75},{"name":"山西","value":992.69},{"name":"内蒙古","value":811.47},{"name":"辽宁","value":2258.17},{"name":"吉林","value":958.88},{"name":"黑龙江","value":1319.4},{"name":"上海","value":3038.9},{"name":"江苏","value":3891.92},{"name":"浙江","value":3227.99},{"name":"安徽","value":1399.02},{"name":"福建","value":1765.8},{"name":"江西","value":972.73},{"name":"山东","value":3700.52},{"name":"河南","value":1978.37},{"name":"湖北","value":1795.93},{"name":"湖南","value":1780.79},{"name":"广东","value":6343.94},{"name":"广西","value":1074.85},{"name":"海南","value":270.96},{"name":"重庆","value":956.12},{"name":"四川","value":1943.68},{"name":"贵州","value":480.37},{"name":"云南","value":914.5},{"name":"西藏","value":89.56},{"name":"陕西","value":963.62},{"name":"甘肃","value":514.83},{"name":"青海","value":148.83},{"name":"宁夏","value":171.14},{"name":"新疆","value":704.5}
 ]
 },
 {
 "title":{"text":"2003全国宏观经济指标"},
 "series":[
 {"name":"GDP","_name":"GDP","data":[{"name":"北京","value":5007.21},{"name":"天津","value":2578.03},{"name":"河北","value":6921.29},{"name":"山西","value":2855.23},{"name":"内蒙古","value":2388.38},{"name":"辽宁","value":6002.54},{"name":"吉林","value":2662.08},{"name":"黑龙江","value":4057.4},{"name":"上海","value":6694.23},{"name":"江苏","value":12442.87},{"name":"浙江","value":9705.02},{"name":"安徽","value":3923.11},{"name":"福建","value":4983.67},{"name":"江西","value":2807.41},{"name":"山东","value":12078.15},{"name":"河南","value":6867.7},{"name":"湖北","value":4757.45},{"name":"湖南","value":4659.99},{"name":"广东","value":15844.64},{"name":"广西","value":2821.11},{"name":"海南","value":713.96},{"name":"重庆","value":2555.72},{"name":"四川","value":5333.09},{"name":"贵州","value":1426.34},{"name":"云南","value":2556.02},{"name":"西藏","value":185.09},{"name":"陕西","value":2587.72},{"name":"甘肃","value":1399.83},{"name":"青海","value":390.2},{"name":"宁夏","value":445.36},{"name":"新疆","value":1886.35}]},{"name":"金融","_name":"Financial","yAxisIndex":1,"data":[{"name":"北京","value":635.56},{"name":"天津","value":112.79},{"name":"河北","value":199.87},{"name":"山西","value":118.48},{"name":"内蒙古","value":55.89},{"name":"辽宁","value":145.38},{"name":"吉林","value":73.15},{"name":"黑龙江","value":32.2},{"name":"上海","value":517.97},{"name":"江苏","value":392.11},{"name":"浙江","value":451.54},{"name":"安徽","value":87.45},{"name":"福建","value":150.09},{"name":"江西","value":64.31},{"name":"山东","value":329.71},{"name":"河南","value":165.11},{"name":"湖北","value":107.31},{"name":"湖南","value":99.35},{"name":"广东","value":534.28},{"name":"广西","value":61.59},{"name":"海南","value":10.68},{"name":"重庆","value":147.04},{"name":"四川","value":206.24},{"name":"贵州","value":48.01},{"name":"云南","value":105.48},{"name":"西藏","value":4.74},{"name":"陕西","value":77.87},{"name":"甘肃","value":42.31},{"name":"青海","value":17.98},{"name":"宁夏","value":24.8},{"name":"新疆","value":64.92}]},{"name":"房地产","_name":"Estate","yAxisIndex":1,"data":[{"name":"北京","value":341.88},{"name":"天津","value":92.31},{"name":"河北","value":185.19},{"name":"山西","value":78.73},{"name":"内蒙古","value":61.05},{"name":"辽宁","value":188.49},{"name":"吉林","value":91.99},{"name":"黑龙江","value":127.2},{"name":"上海","value":487.82},{"name":"江苏","value":447.47},{"name":"浙江","value":473.16},{"name":"安徽","value":162.63},{"name":"福建","value":215.84},{"name":"江西","value":138.02},{"name":"山东","value":418.21},{"name":"河南","value":217.58},{"name":"湖北","value":176.8},{"name":"湖南","value":186.49},{"name":"广东","value":955.66},{"name":"广西","value":100.93},{"name":"海南","value":25.14},{"name":"重庆","value":113.69},{"name":"四川","value":231.72},{"name":"贵州","value":59.86},{"name":"云南","value":103.79},{"name":"西藏","value":4.35},{"name":"陕西","value":83.9},{"name":"甘肃","value":48.09},{"name":"青海","value":11.41},{"name":"宁夏","value":16.85},{"name":"新疆","value":47.84}]},{"name":"第一产业","_name":"PI","yAxisIndex":1,"data":[{"name":"北京","value":84.11},{"name":"天津","value":89.91},{"name":"河北","value":1064.05},{"name":"山西","value":215.19},{"name":"内蒙古","value":420.1},{"name":"辽宁","value":615.8},{"name":"吉林","value":488.23},{"name":"黑龙江","value":504.8},{"name":"上海","value":81.02},{"name":"江苏","value":1162.45},{"name":"浙江","value":717.85},{"name":"安徽","value":749.4},{"name":"福建","value":692.94},{"name":"江西","value":560},{"name":"山东","value":1480.67},{"name":"河南","value":1198.7},{"name":"湖北","value":798.35},{"name":"湖南","value":886.47},{"name":"广东","value":1072.91},{"name":"广西","value":658.78},{"name":"海南","value":244.29},{"name":"重庆","value":339.06},{"name":"四川","value":1128.61},{"name":"贵州","value":298.69},{"name":"云南","value":494.6},{"name":"西藏","value":40.7},{"name":"陕西","value":302.66},{"name":"甘肃","value":237.91},{"name":"青海","value":48.47},{"name":"宁夏","value":55.63},{"name":"新疆","value":412.9}]},{"name":"第二产业","_name":"SI","yAxisIndex":1,"data":[{"name":"北京","value":1487.15},{"name":"天津","value":1337.31},{"name":"河北","value":3417.56},{"name":"山西","value":1463.38},{"name":"内蒙古","value":967.49},{"name":"辽宁","value":2898.89},{"name":"吉林","value":1098.37},{"name":"黑龙江","value":2084.7},{"name":"上海","value":3209.02},{"name":"江苏","value":6787.11},{"name":"浙江","value":5096.38},{"name":"安徽","value":1535.29},{"name":"福建","value":2340.82},{"name":"江西","value":1204.33},{"name":"山东","value":6485.05},{"name":"河南","value":3310.14},{"name":"湖北","value":1956.02},{"name":"湖南","value":1777.74},{"name":"广东","value":7592.78},{"name":"广西","value":984.08},{"name":"海南","value":175.82},{"name":"重庆","value":1135.31},{"name":"四川","value":2014.8},{"name":"贵州","value":569.37},{"name":"云南","value":1047.66},{"name":"西藏","value":47.64},{"name":"陕西","value":1221.17},{"name":"甘肃","value":572.02},{"name":"青海","value":171.92},{"name":"宁夏","value":194.27},{"name":"新疆","value":719.54}]},{"name":"第三产业","_name":"TI","yAxisIndex":1,"data":[{"name":"北京","value":3435.95},{"name":"天津","value":1150.81},{"name":"河北","value":2439.68},{"name":"山西","value":1176.65},{"name":"内蒙古","value":1000.79},{"name":"辽宁","value":2487.85},{"name":"吉林","value":1075.48},{"name":"黑龙江","value":1467.9},{"name":"上海","value":3404.19},{"name":"江苏","value":4493.31},{"name":"浙江","value":3890.79},{"name":"安徽","value":1638.42},{"name":"福建","value":1949.91},{"name":"江西","value":1043.08},{"name":"山东","value":4112.43},{"name":"河南","value":2358.86},{"name":"湖北","value":2003.08},{"name":"湖南","value":1995.78},{"name":"广东","value":7178.94},{"name":"广西","value":1178.25},{"name":"海南","value":293.85},{"name":"重庆","value":1081.35},{"name":"四川","value":2189.68},{"name":"贵州","value":558.28},{"name":"云南","value":1013.76},{"name":"西藏","value":96.76},{"name":"陕西","value":1063.89},{"name":"甘肃","value":589.91},{"name":"青海","value":169.81},{"name":"宁夏","value":195.46},{"name":"新疆","value":753.91}]}
 ]
 },
 {
 "title":{"text":"2004全国宏观经济指标"},
 "series":[
 {"name":"GDP","_name":"GDP","data":[{"name":"北京","value":6033.21},{"name":"天津","value":3110.97},{"name":"河北","value":8477.63},{"name":"山西","value":3571.37},{"name":"内蒙古","value":3041.07},{"name":"辽宁","value":6672},{"name":"吉林","value":3122.01},{"name":"黑龙江","value":4750.6},{"name":"上海","value":8072.83},{"name":"江苏","value":15003.6},{"name":"浙江","value":11648.7},{"name":"安徽","value":4759.3},{"name":"福建","value":5763.35},{"name":"江西","value":3456.7},{"name":"山东","value":15021.84},{"name":"河南","value":8553.79},{"name":"湖北","value":5633.24},{"name":"湖南","value":5641.94},{"name":"广东","value":18864.62},{"name":"广西","value":3433.5},{"name":"海南","value":819.66},{"name":"重庆","value":3034.58},{"name":"四川","value":6379.63},{"name":"贵州","value":1677.8},{"name":"云南","value":3081.91},{"name":"西藏","value":220.34},{"name":"陕西","value":3175.58},{"name":"甘肃","value":1688.49},{"name":"青海","value":466.1},{"name":"宁夏","value":537.11},{"name":"新疆","value":2209.09}]},{"name":"金融","_name":"Financial","yAxisIndex":1,"data":[{"name":"北京","value":713.79},{"name":"天津","value":136.97},{"name":"河北","value":209.1},{"name":"山西","value":110.29},{"name":"内蒙古","value":55.89},{"name":"辽宁","value":188.04},{"name":"吉林","value":77.17},{"name":"黑龙江","value":32.2},{"name":"上海","value":612.45},{"name":"江苏","value":440.5},{"name":"浙江","value":523.49},{"name":"安徽","value":94.1},{"name":"福建","value":171},{"name":"江西","value":65.1},{"name":"山东","value":343.37},{"name":"河南","value":170.82},{"name":"湖北","value":118.85},{"name":"湖南","value":118.64},{"name":"广东","value":602.68},{"name":"广西","value":74},{"name":"海南","value":11.56},{"name":"重庆","value":162.38},{"name":"四川","value":236.5},{"name":"贵州","value":60.3},{"name":"云南","value":118.4},{"name":"西藏","value":5.4},{"name":"陕西","value":90.1},{"name":"甘肃","value":42.99},{"name":"青海","value":19},{"name":"宁夏","value":27.92},{"name":"新疆","value":70.3}]},{"name":"房地产","_name":"Estate","yAxisIndex":1,"data":[{"name":"北京","value":436.11},{"name":"天津","value":106.14},{"name":"河北","value":231.08},{"name":"山西","value":95.1},{"name":"内蒙古","value":73.81},{"name":"辽宁","value":203.1},{"name":"吉林","value":97.93},{"name":"黑龙江","value":137.74},{"name":"上海","value":666.3},{"name":"江苏","value":534.17},{"name":"浙江","value":587.83},{"name":"安徽","value":188.28},{"name":"福建","value":248.44},{"name":"江西","value":167.2},{"name":"山东","value":473.27},{"name":"河南","value":236.44},{"name":"湖北","value":204.8},{"name":"湖南","value":191.5},{"name":"广东","value":1103.75},{"name":"广西","value":122.52},{"name":"海南","value":30.64},{"name":"重庆","value":129.12},{"name":"四川","value":264.3},{"name":"贵州","value":68.3},{"name":"云南","value":116.54},{"name":"西藏","value":5.8},{"name":"陕西","value":95.9},{"name":"甘肃","value":56.84},{"name":"青海","value":13},{"name":"宁夏","value":20.78},{"name":"新疆","value":53.55}]},{"name":"第一产业","_name":"PI","yAxisIndex":1,"data":[{"name":"北京","value":87.36},{"name":"天津","value":105.28},{"name":"河北","value":1370.43},{"name":"山西","value":276.3},{"name":"内蒙古","value":522.8},{"name":"辽宁","value":798.43},{"name":"吉林","value":568.69},{"name":"黑龙江","value":605.79},{"name":"上海","value":83.45},{"name":"江苏","value":1367.58},{"name":"浙江","value":814.1},{"name":"安徽","value":950.5},{"name":"福建","value":786.84},{"name":"江西","value":664.5},{"name":"山东","value":1778.45},{"name":"河南","value":1649.29},{"name":"湖北","value":1020.09},{"name":"湖南","value":1022.45},{"name":"广东","value":1248.59},{"name":"广西","value":817.88},{"name":"海南","value":278.76},{"name":"重庆","value":428.05},{"name":"四川","value":1379.93},{"name":"贵州","value":334.5},{"name":"云南","value":607.75},{"name":"西藏","value":44.3},{"name":"陕西","value":387.88},{"name":"甘肃","value":286.78},{"name":"青海","value":60.7},{"name":"宁夏","value":65.33},{"name":"新疆","value":461.26}]},{"name":"第二产业","_name":"SI","yAxisIndex":1,"data":[{"name":"北京","value":1853.58},{"name":"天津","value":1685.93},{"name":"河北","value":4301.73},{"name":"山西","value":1919.4},{"name":"内蒙古","value":1248.27},{"name":"辽宁","value":3061.62},{"name":"吉林","value":1329.68},{"name":"黑龙江","value":2487.04},{"name":"上海","value":3892.12},{"name":"江苏","value":8437.99},{"name":"浙江","value":6250.38},{"name":"安徽","value":1844.9},{"name":"福建","value":2770.49},{"name":"江西","value":1566.4},{"name":"山东","value":8478.69},{"name":"河南","value":4182.1},{"name":"湖北","value":2320.6},{"name":"湖南","value":2190.54},{"name":"广东","value":9280.73},{"name":"广西","value":1253.7},{"name":"海南","value":205.6},{"name":"重庆","value":1376.91},{"name":"四川","value":2489.4},{"name":"贵州","value":681.5},{"name":"云南","value":1281.63},{"name":"西藏","value":52.74},{"name":"陕西","value":1553.1},{"name":"甘肃","value":713.3},{"name":"青海","value":211.7},{"name":"宁夏","value":244.05},{"name":"新疆","value":914.47}]},{"name":"第三产业","_name":"TI","yAxisIndex":1,"data":[{"name":"北京","value":4092.27},{"name":"天津","value":1319.76},{"name":"河北","value":2805.47},{"name":"山西","value":1375.67},{"name":"内蒙古","value":1270},{"name":"辽宁","value":2811.95},{"name":"吉林","value":1223.64},{"name":"黑龙江","value":1657.77},{"name":"上海","value":4097.26},{"name":"江苏","value":5198.03},{"name":"浙江","value":4584.22},{"name":"安徽","value":1963.9},{"name":"福建","value":2206.02},{"name":"江西","value":1225.8},{"name":"山东","value":4764.7},{"name":"河南","value":2722.4},{"name":"湖北","value":2292.55},{"name":"湖南","value":2428.95},{"name":"广东","value":8335.3},{"name":"广西","value":1361.92},{"name":"海南","value":335.3},{"name":"重庆","value":1229.62},{"name":"四川","value":2510.3},{"name":"贵州","value":661.8},{"name":"云南","value":1192.53},{"name":"西藏","value":123.3},{"name":"陕西","value":1234.6},{"name":"甘肃","value":688.41},{"name":"青海","value":193.7},{"name":"宁夏","value":227.73},{"name":"新疆","value":833.36}]}
 ]
 },
 {
 "title":{"text":"2005全国宏观经济指标"},
 "series":[
 {"name":"GDP","_name":"GDP","data":[{"name":"北京","value":6969.52},{"name":"天津","value":3905.64},{"name":"河北","value":10012.11},{"name":"山西","value":4230.53},{"name":"内蒙古","value":3905.03},{"name":"辽宁","value":8047.26},{"name":"吉林","value":3620.27},{"name":"黑龙江","value":5513.7},{"name":"上海","value":9247.66},{"name":"江苏","value":18598.69},{"name":"浙江","value":13417.68},{"name":"安徽","value":5350.17},{"name":"福建","value":6554.69},{"name":"江西","value":4056.76},{"name":"山东","value":18366.87},{"name":"河南","value":10587.42},{"name":"湖北","value":6590.19},{"name":"湖南","value":6596.1},{"name":"广东","value":22557.37},{"name":"广西","value":3984.1},{"name":"海南","value":918.75},{"name":"重庆","value":3467.72},{"name":"四川","value":7385.1},{"name":"贵州","value":2005.42},{"name":"云南","value":3462.73},{"name":"西藏","value":248.8},{"name":"陕西","value":3933.72},{"name":"甘肃","value":1933.98},{"name":"青海","value":543.32},{"name":"宁夏","value":612.61},{"name":"新疆","value":2604.19}]},{"name":"金融","_name":"Financial","yAxisIndex":1,"data":[{"name":"北京","value":840.2},{"name":"天津","value":147.4},{"name":"河北","value":213.47},{"name":"山西","value":135.07},{"name":"内蒙古","value":72.52},{"name":"辽宁","value":232.85},{"name":"吉林","value":83.63},{"name":"黑龙江","value":35.03},{"name":"上海","value":675.12},{"name":"江苏","value":492.4},{"name":"浙江","value":686.32},{"name":"安徽","value":127.05},{"name":"福建","value":186.12},{"name":"江西","value":69.55},{"name":"山东","value":448.36},{"name":"河南","value":181.74},{"name":"湖北","value":127.32},{"name":"湖南","value":162.37},{"name":"广东","value":661.81},{"name":"广西","value":91.93},{"name":"海南","value":13.16},{"name":"重庆","value":185.18},{"name":"四川","value":262.26},{"name":"贵州","value":73.67},{"name":"云南","value":130.5},{"name":"西藏","value":7.57},{"name":"陕西","value":127.58},{"name":"甘肃","value":44.73},{"name":"青海","value":20.36},{"name":"宁夏","value":32.25},{"name":"新疆","value":80.34}]},{"name":"房地产","_name":"Estate","yAxisIndex":1,"data":[{"name":"北京","value":493.73},{"name":"天津","value":122.67},{"name":"河北","value":330.87},{"name":"山西","value":106},{"name":"内蒙古","value":98.75},{"name":"辽宁","value":256.77},{"name":"吉林","value":112.29},{"name":"黑龙江","value":163.34},{"name":"上海","value":715.97},{"name":"江苏","value":799.73},{"name":"浙江","value":688.86},{"name":"安徽","value":231.66},{"name":"福建","value":331.8},{"name":"江西","value":171.88},{"name":"山东","value":664.9},{"name":"河南","value":298.19},{"name":"湖北","value":217.17},{"name":"湖南","value":215.63},{"name":"广东","value":1430.37},{"name":"广西","value":165.05},{"name":"海南","value":38.2},{"name":"重庆","value":143.88},{"name":"四川","value":286.23},{"name":"贵州","value":76.38},{"name":"云南","value":148.69},{"name":"西藏","value":10.02},{"name":"陕西","value":108.62},{"name":"甘肃","value":63.78},{"name":"青海","value":14.1},{"name":"宁夏","value":22.97},{"name":"新疆","value":55.79}]},{"name":"第一产业","_name":"PI","yAxisIndex":1,"data":[{"name":"北京","value":88.68},{"name":"天津","value":112.38},{"name":"河北","value":1400},{"name":"山西","value":262.42},{"name":"内蒙古","value":589.56},{"name":"辽宁","value":882.41},{"name":"吉林","value":625.61},{"name":"黑龙江","value":684.6},{"name":"上海","value":90.26},{"name":"江苏","value":1461.51},{"name":"浙江","value":892.83},{"name":"安徽","value":966.5},{"name":"福建","value":827.36},{"name":"江西","value":727.37},{"name":"山东","value":1963.51},{"name":"河南","value":1892.01},{"name":"湖北","value":1082.13},{"name":"湖南","value":1100.65},{"name":"广东","value":1428.27},{"name":"广西","value":912.5},{"name":"海南","value":300.75},{"name":"重庆","value":463.4},{"name":"四川","value":1481.14},{"name":"贵州","value":368.94},{"name":"云南","value":661.69},{"name":"西藏","value":48.04},{"name":"陕西","value":435.77},{"name":"甘肃","value":308.06},{"name":"青海","value":65.34},{"name":"宁夏","value":72.07},{"name":"新疆","value":509.99}]},{"name":"第二产业","_name":"SI","yAxisIndex":1,"data":[{"name":"北京","value":2026.51},{"name":"天津","value":2135.07},{"name":"河北","value":5271.57},{"name":"山西","value":2357.04},{"name":"内蒙古","value":1773.21},{"name":"辽宁","value":3869.4},{"name":"吉林","value":1580.83},{"name":"黑龙江","value":2971.68},{"name":"上海","value":4381.2},{"name":"江苏","value":10524.96},{"name":"浙江","value":7164.75},{"name":"安徽","value":2245.9},{"name":"福建","value":3175.92},{"name":"江西","value":1917.47},{"name":"山东","value":10478.62},{"name":"河南","value":5514.14},{"name":"湖北","value":2852.12},{"name":"湖南","value":2612.57},{"name":"广东","value":11356.6},{"name":"广西","value":1510.68},{"name":"海南","value":240.83},{"name":"重庆","value":1564},{"name":"四川","value":3067.23},{"name":"贵州","value":821.16},{"name":"云南","value":1426.42},{"name":"西藏","value":63.52},{"name":"陕西","value":1951.36},{"name":"甘肃","value":838.56},{"name":"青海","value":264.61},{"name":"宁夏","value":281.05},{"name":"新疆","value":1164.79}]},{"name":"第三产业","_name":"TI","yAxisIndex":1,"data":[{"name":"北京","value":4854.33},{"name":"天津","value":1658.19},{"name":"河北","value":3340.54},{"name":"山西","value":1611.07},{"name":"内蒙古","value":1542.26},{"name":"辽宁","value":3295.45},{"name":"吉林","value":1413.83},{"name":"黑龙江","value":1857.42},{"name":"上海","value":4776.2},{"name":"江苏","value":6612.22},{"name":"浙江","value":5360.1},{"name":"安徽","value":2137.77},{"name":"福建","value":2551.41},{"name":"江西","value":1411.92},{"name":"山东","value":5924.74},{"name":"河南","value":3181.27},{"name":"湖北","value":2655.94},{"name":"湖南","value":2882.88},{"name":"广东","value":9772.5},{"name":"广西","value":1560.92},{"name":"海南","value":377.17},{"name":"重庆","value":1440.32},{"name":"四川","value":2836.73},{"name":"贵州","value":815.32},{"name":"云南","value":1374.62},{"name":"西藏","value":137.24},{"name":"陕西","value":1546.59},{"name":"甘肃","value":787.36},{"name":"青海","value":213.37},{"name":"宁夏","value":259.49},{"name":"新疆","value":929.41}]}
 ]
 },
 {
 "title":{"text":"2006全国宏观经济指标"},
 "series":[
 {"name":"GDP","_name":"GDP","data":[{"name":"北京","value":8117.78},{"name":"天津","value":4462.74},{"name":"河北","value":11467.6},{"name":"山西","value":4878.61},{"name":"内蒙古","value":4944.25},{"name":"辽宁","value":9304.52},{"name":"吉林","value":4275.12},{"name":"黑龙江","value":6211.8},{"name":"上海","value":10572.24},{"name":"江苏","value":21742.05},{"name":"浙江","value":15718.47},{"name":"安徽","value":6112.5},{"name":"福建","value":7583.85},{"name":"江西","value":4820.53},{"name":"山东","value":21900.19},{"name":"河南","value":12362.79},{"name":"湖北","value":7617.47},{"name":"湖南","value":7688.67},{"name":"广东","value":26587.76},{"name":"广西","value":4746.16},{"name":"海南","value":1065.67},{"name":"重庆","value":3907.23},{"name":"四川","value":8690.24},{"name":"贵州","value":2338.98},{"name":"云南","value":3988.14},{"name":"西藏","value":290.76},{"name":"陕西","value":4743.61},{"name":"甘肃","value":2277.35},{"name":"青海","value":648.5},{"name":"宁夏","value":725.9},{"name":"新疆","value":3045.26}]},{"name":"金融","_name":"Financial","yAxisIndex":1,"data":[{"name":"北京","value":982.37},{"name":"天津","value":186.87},{"name":"河北","value":284.04},{"name":"山西","value":169.63},{"name":"内蒙古","value":108.21},{"name":"辽宁","value":303.41},{"name":"吉林","value":100.75},{"name":"黑龙江","value":74.17},{"name":"上海","value":825.2},{"name":"江苏","value":653.25},{"name":"浙江","value":906.37},{"name":"安徽","value":166.01},{"name":"福建","value":243.9},{"name":"江西","value":79.75},{"name":"山东","value":524.94},{"name":"河南","value":219.72},{"name":"湖北","value":174.99},{"name":"湖南","value":204.72},{"name":"广东","value":899.91},{"name":"广西","value":129.14},{"name":"海南","value":16.37},{"name":"重庆","value":213.7},{"name":"四川","value":299.5},{"name":"贵州","value":89.43},{"name":"云南","value":143.62},{"name":"西藏","value":6.44},{"name":"陕西","value":152.25},{"name":"甘肃","value":50.51},{"name":"青海","value":23.69},{"name":"宁夏","value":36.99},{"name":"新疆","value":99.25}]},{"name":"房地产","_name":"Estate","yAxisIndex":1,"data":[{"name":"北京","value":658.3},{"name":"天津","value":156.64},{"name":"河北","value":397.14},{"name":"山西","value":117.01},{"name":"内蒙古","value":136.5},{"name":"辽宁","value":318.54},{"name":"吉林","value":131.01},{"name":"黑龙江","value":194.7},{"name":"上海","value":773.61},{"name":"江苏","value":1017.91},{"name":"浙江","value":794.41},{"name":"安徽","value":281.98},{"name":"福建","value":435.22},{"name":"江西","value":184.67},{"name":"山东","value":786.51},{"name":"河南","value":348.7},{"name":"湖北","value":294.73},{"name":"湖南","value":254.81},{"name":"广东","value":1722.07},{"name":"广西","value":192.2},{"name":"海南","value":44.45},{"name":"重庆","value":158.2},{"name":"四川","value":336.2},{"name":"贵州","value":80.24},{"name":"云南","value":165.92},{"name":"西藏","value":11.92},{"name":"陕西","value":125.2},{"name":"甘肃","value":73.21},{"name":"青海","value":15.17},{"name":"宁夏","value":25.53},{"name":"新疆","value":68.9}]},{"name":"第一产业","_name":"PI","yAxisIndex":1,"data":[{"name":"北京","value":88.8},{"name":"天津","value":103.35},{"name":"河北","value":1461.81},{"name":"山西","value":276.77},{"name":"内蒙古","value":634.94},{"name":"辽宁","value":939.43},{"name":"吉林","value":672.76},{"name":"黑龙江","value":750.14},{"name":"上海","value":93.81},{"name":"江苏","value":1545.05},{"name":"浙江","value":925.1},{"name":"安徽","value":1011.03},{"name":"福建","value":865.98},{"name":"江西","value":786.14},{"name":"山东","value":2138.9},{"name":"河南","value":1916.74},{"name":"湖北","value":1140.41},{"name":"湖南","value":1272.2},{"name":"广东","value":1532.17},{"name":"广西","value":1032.47},{"name":"海南","value":323.48},{"name":"重庆","value":386.38},{"name":"四川","value":1595.48},{"name":"贵州","value":382.06},{"name":"云南","value":724.4},{"name":"西藏","value":50.9},{"name":"陕西","value":484.81},{"name":"甘肃","value":334},{"name":"青海","value":67.55},{"name":"宁夏","value":79.54},{"name":"新疆","value":527.8}]},{"name":"第二产业","_name":"SI","yAxisIndex":1,"data":[{"name":"北京","value":2191.43},{"name":"天津","value":2457.08},{"name":"河北","value":6110.43},{"name":"山西","value":2755.66},{"name":"内蒙古","value":2374.96},{"name":"辽宁","value":4566.83},{"name":"吉林","value":1915.29},{"name":"黑龙江","value":3365.31},{"name":"上海","value":4969.95},{"name":"江苏","value":12282.89},{"name":"浙江","value":8511.51},{"name":"安徽","value":2711.18},{"name":"福建","value":3695.04},{"name":"江西","value":2419.74},{"name":"山东","value":12574.03},{"name":"河南","value":6724.61},{"name":"湖北","value":3365.08},{"name":"湖南","value":3187.05},{"name":"广东","value":13469.77},{"name":"广西","value":1878.56},{"name":"海南","value":308.62},{"name":"重庆","value":1871.65},{"name":"四川","value":3775.14},{"name":"贵州","value":967.54},{"name":"云南","value":1705.83},{"name":"西藏","value":80.1},{"name":"陕西","value":2452.44},{"name":"甘肃","value":1043.19},{"name":"青海","value":331.91},{"name":"宁夏","value":351.58},{"name":"新疆","value":1459.3}]},{"name":"第三产业","_name":"TI","yAxisIndex":1,"data":[{"name":"北京","value":5837.55},{"name":"天津","value":1902.31},{"name":"河北","value":3895.36},{"name":"山西","value":1846.18},{"name":"内蒙古","value":1934.35},{"name":"辽宁","value":3798.26},{"name":"吉林","value":1687.07},{"name":"黑龙江","value":2096.35},{"name":"上海","value":5508.48},{"name":"江苏","value":7914.11},{"name":"浙江","value":6281.86},{"name":"安徽","value":2390.29},{"name":"福建","value":3022.83},{"name":"江西","value":1614.65},{"name":"山东","value":7187.26},{"name":"河南","value":3721.44},{"name":"湖北","value":3111.98},{"name":"湖南","value":3229.42},{"name":"广东","value":11585.82},{"name":"广西","value":1835.12},{"name":"海南","value":433.57},{"name":"重庆","value":1649.2},{"name":"四川","value":3319.62},{"name":"贵州","value":989.38},{"name":"云南","value":1557.91},{"name":"西藏","value":159.76},{"name":"陕西","value":1806.36},{"name":"甘肃","value":900.16},{"name":"青海","value":249.04},{"name":"宁夏","value":294.78},{"name":"新疆","value":1058.16}]}
 ]
 },
 {
 "title":{"text":"2007全国宏观经济指标"},
 "series":[
 {"name":"GDP","_name":"GDP","data":[{"name":"北京","value":9846.81},{"name":"天津","value":5252.76},{"name":"河北","value":13607.32},{"name":"山西","value":6024.45},{"name":"内蒙古","value":6423.18},{"name":"辽宁","value":11164.3},{"name":"吉林","value":5284.69},{"name":"黑龙江","value":7104},{"name":"上海","value":12494.01},{"name":"江苏","value":26018.48},{"name":"浙江","value":18753.73},{"name":"安徽","value":7360.92},{"name":"福建","value":9248.53},{"name":"江西","value":5800.25},{"name":"山东","value":25776.91},{"name":"河南","value":15012.46},{"name":"湖北","value":9333.4},{"name":"湖南","value":9439.6},{"name":"广东","value":31777.01},{"name":"广西","value":5823.41},{"name":"海南","value":1254.17},{"name":"重庆","value":4676.13},{"name":"四川","value":10562.39},{"name":"贵州","value":2884.11},{"name":"云南","value":4772.52},{"name":"西藏","value":341.43},{"name":"陕西","value":5757.29},{"name":"甘肃","value":2703.98},{"name":"青海","value":797.35},{"name":"宁夏","value":919.11},{"name":"新疆","value":3523.16}]},{"name":"金融","_name":"Financial","yAxisIndex":1,"data":[{"name":"北京","value":1302.77},{"name":"天津","value":288.17},{"name":"河北","value":347.65},{"name":"山西","value":218.73},{"name":"内蒙古","value":148.3},{"name":"辽宁","value":386.34},{"name":"吉林","value":126.03},{"name":"黑龙江","value":155.48},{"name":"上海","value":1209.08},{"name":"江苏","value":1054.25},{"name":"浙江","value":1251.43},{"name":"安徽","value":223.85},{"name":"福建","value":385.84},{"name":"江西","value":101.34},{"name":"山东","value":734.9},{"name":"河南","value":302.31},{"name":"湖北","value":337.27},{"name":"湖南","value":260.14},{"name":"广东","value":1705.08},{"name":"广西","value":190.73},{"name":"海南","value":34.43},{"name":"重庆","value":247.46},{"name":"四川","value":359.11},{"name":"贵州","value":122.25},{"name":"云南","value":168.55},{"name":"西藏","value":11.51},{"name":"陕西","value":231.03},{"name":"甘肃","value":61.6},{"name":"青海","value":27.67},{"name":"宁夏","value":51.05},{"name":"新疆","value":149.22}]},{"name":"房地产","_name":"Estate","yAxisIndex":1,"data":[{"name":"北京","value":821.5},{"name":"天津","value":183.44},{"name":"河北","value":467.97},{"name":"山西","value":134.12},{"name":"内蒙古","value":191.01},{"name":"辽宁","value":410.43},{"name":"吉林","value":153.03},{"name":"黑龙江","value":225.81},{"name":"上海","value":958.06},{"name":"江苏","value":1365.71},{"name":"浙江","value":981.42},{"name":"安徽","value":366.57},{"name":"福建","value":511.5},{"name":"江西","value":225.96},{"name":"山东","value":953.69},{"name":"河南","value":447.44},{"name":"湖北","value":409.65},{"name":"湖南","value":301.8},{"name":"广东","value":2029.77},{"name":"广西","value":239.45},{"name":"海南","value":67.19},{"name":"重庆","value":196.06},{"name":"四川","value":376.84},{"name":"贵州","value":93.19},{"name":"云南","value":193.59},{"name":"西藏","value":13.24},{"name":"陕西","value":153.98},{"name":"甘肃","value":83.52},{"name":"青海","value":16.98},{"name":"宁夏","value":29.49},{"name":"新疆","value":91.28}]},{"name":"第一产业","_name":"PI","yAxisIndex":1,"data":[{"name":"北京","value":101.26},{"name":"天津","value":110.19},{"name":"河北","value":1804.72},{"name":"山西","value":311.97},{"name":"内蒙古","value":762.1},{"name":"辽宁","value":1133.42},{"name":"吉林","value":783.8},{"name":"黑龙江","value":915.38},{"name":"上海","value":101.84},{"name":"江苏","value":1816.31},{"name":"浙江","value":986.02},{"name":"安徽","value":1200.18},{"name":"福建","value":1002.11},{"name":"江西","value":905.77},{"name":"山东","value":2509.14},{"name":"河南","value":2217.66},{"name":"湖北","value":1378},{"name":"湖南","value":1626.48},{"name":"广东","value":1695.57},{"name":"广西","value":1241.35},{"name":"海南","value":361.07},{"name":"重庆","value":482.39},{"name":"四川","value":2032},{"name":"贵州","value":446.38},{"name":"云南","value":837.35},{"name":"西藏","value":54.89},{"name":"陕西","value":592.63},{"name":"甘肃","value":387.55},{"name":"青海","value":83.41},{"name":"宁夏","value":97.89},{"name":"新疆","value":628.72}]},{"name":"第二产业","_name":"SI","yAxisIndex":1,"data":[{"name":"北京","value":2509.4},{"name":"天津","value":2892.53},{"name":"河北","value":7201.88},{"name":"山西","value":3454.49},{"name":"内蒙古","value":3193.67},{"name":"辽宁","value":5544.14},{"name":"吉林","value":2475.45},{"name":"黑龙江","value":3695.58},{"name":"上海","value":5571.06},{"name":"江苏","value":14471.26},{"name":"浙江","value":10154.25},{"name":"安徽","value":3370.96},{"name":"福建","value":4476.42},{"name":"江西","value":2975.53},{"name":"山东","value":14647.53},{"name":"河南","value":8282.83},{"name":"湖北","value":4143.06},{"name":"湖南","value":3977.72},{"name":"广东","value":16004.61},{"name":"广西","value":2425.29},{"name":"海南","value":364.26},{"name":"重庆","value":2368.53},{"name":"四川","value":4648.79},{"name":"贵州","value":1124.79},{"name":"云南","value":2038.39},{"name":"西藏","value":98.48},{"name":"陕西","value":2986.46},{"name":"甘肃","value":1279.32},{"name":"青海","value":419.03},{"name":"宁夏","value":455.04},{"name":"新疆","value":1647.55}]},{"name":"第三产业","_name":"TI","yAxisIndex":1,"data":[{"name":"北京","value":7236.15},{"name":"天津","value":2250.04},{"name":"河北","value":4600.72},{"name":"山西","value":2257.99},{"name":"内蒙古","value":2467.41},{"name":"辽宁","value":4486.74},{"name":"吉林","value":2025.44},{"name":"黑龙江","value":2493.04},{"name":"上海","value":6821.11},{"name":"江苏","value":9730.91},{"name":"浙江","value":7613.46},{"name":"安徽","value":2789.78},{"name":"福建","value":3770},{"name":"江西","value":1918.95},{"name":"山东","value":8620.24},{"name":"河南","value":4511.97},{"name":"湖北","value":3812.34},{"name":"湖南","value":3835.4},{"name":"广东","value":14076.83},{"name":"广西","value":2156.76},{"name":"海南","value":528.84},{"name":"重庆","value":1825.21},{"name":"四川","value":3881.6},{"name":"贵州","value":1312.94},{"name":"云南","value":1896.78},{"name":"西藏","value":188.06},{"name":"陕西","value":2178.2},{"name":"甘肃","value":1037.11},{"name":"青海","value":294.91},{"name":"宁夏","value":366.18},{"name":"新疆","value":1246.89}]}
 ]
 },
 {
 "title":{"text":"2008全国宏观经济指标"},
 "series":[
 {"name":"GDP","_name":"GDP","data":[{"name":"北京","value":11115},{"name":"天津","value":6719.01},{"name":"河北","value":16011.97},{"name":"山西","value":7315.4},{"name":"内蒙古","value":8496.2},{"name":"辽宁","value":13668.58},{"name":"吉林","value":6426.1},{"name":"黑龙江","value":8314.37},{"name":"上海","value":14069.87},{"name":"江苏","value":30981.98},{"name":"浙江","value":21462.69},{"name":"安徽","value":8851.66},{"name":"福建","value":10823.01},{"name":"江西","value":6971.05},{"name":"山东","value":30933.28},{"name":"河南","value":18018.53},{"name":"湖北","value":11328.92},{"name":"湖南","value":11555},{"name":"广东","value":36796.71},{"name":"广西","value":7021},{"name":"海南","value":1503.06},{"name":"重庆","value":5793.66},{"name":"四川","value":12601.23},{"name":"贵州","value":3561.56},{"name":"云南","value":5692.12},{"name":"西藏","value":394.85},{"name":"陕西","value":7314.58},{"name":"甘肃","value":3166.82},{"name":"青海","value":1018.62},{"name":"宁夏","value":1203.92},{"name":"新疆","value":4183.21}]},{"name":"金融","_name":"Financial","yAxisIndex":1,"data":[{"name":"北京","value":1519.19},{"name":"天津","value":368.1},{"name":"河北","value":420.74},{"name":"山西","value":290.91},{"name":"内蒙古","value":219.09},{"name":"辽宁","value":455.07},{"name":"吉林","value":147.24},{"name":"黑龙江","value":177.43},{"name":"上海","value":1414.21},{"name":"江苏","value":1298.48},{"name":"浙江","value":1653.45},{"name":"安徽","value":313.81},{"name":"福建","value":497.65},{"name":"江西","value":130.57},{"name":"山东","value":880.28},{"name":"河南","value":413.83},{"name":"湖北","value":393.05},{"name":"湖南","value":334.32},{"name":"广东","value":1972.4},{"name":"广西","value":249.01},{"name":"海南","value":47.33},{"name":"重庆","value":303.01},{"name":"四川","value":411.14},{"name":"贵州","value":151.55},{"name":"云南","value":277.66},{"name":"西藏","value":22.42},{"name":"陕西","value":287.16},{"name":"甘肃","value":72.49},{"name":"青海","value":36.54},{"name":"宁夏","value":64.8},{"name":"新疆","value":171.97}]},{"name":"房地产","_name":"Estate","yAxisIndex":1,"data":[{"name":"北京","value":844.59},{"name":"天津","value":227.88},{"name":"河北","value":513.81},{"name":"山西","value":166.04},{"name":"内蒙古","value":273.3},{"name":"辽宁","value":500.81},{"name":"吉林","value":182.7},{"name":"黑龙江","value":244.47},{"name":"上海","value":939.34},{"name":"江苏","value":1626.13},{"name":"浙江","value":1052.03},{"name":"安徽","value":431.27},{"name":"福建","value":506.98},{"name":"江西","value":281.96},{"name":"山东","value":1104.95},{"name":"河南","value":512.42},{"name":"湖北","value":526.88},{"name":"湖南","value":340.07},{"name":"广东","value":2057.45},{"name":"广西","value":282.96},{"name":"海南","value":95.6},{"name":"重庆","value":191.21},{"name":"四川","value":453.63},{"name":"贵州","value":104.81},{"name":"云南","value":195.48},{"name":"西藏","value":15.08},{"name":"陕西","value":193.27},{"name":"甘肃","value":93.8},{"name":"青海","value":19.96},{"name":"宁夏","value":38.85},{"name":"新疆","value":89.79}]},{"name":"第一产业","_name":"PI","yAxisIndex":1,"data":[{"name":"北京","value":112.83},{"name":"天津","value":122.58},{"name":"河北","value":2034.59},{"name":"山西","value":313.58},{"name":"内蒙古","value":907.95},{"name":"辽宁","value":1302.02},{"name":"吉林","value":916.72},{"name":"黑龙江","value":1088.94},{"name":"上海","value":111.8},{"name":"江苏","value":2100.11},{"name":"浙江","value":1095.96},{"name":"安徽","value":1418.09},{"name":"福建","value":1158.17},{"name":"江西","value":1060.38},{"name":"山东","value":3002.65},{"name":"河南","value":2658.78},{"name":"湖北","value":1780},{"name":"湖南","value":1892.4},{"name":"广东","value":1973.05},{"name":"广西","value":1453.75},{"name":"海南","value":436.04},{"name":"重庆","value":575.4},{"name":"四川","value":2216.15},{"name":"贵州","value":539.19},{"name":"云南","value":1020.56},{"name":"西藏","value":60.62},{"name":"陕西","value":753.72},{"name":"甘肃","value":462.27},{"name":"青海","value":105.57},{"name":"宁夏","value":118.94},{"name":"新疆","value":691.07}]},{"name":"第二产业","_name":"SI","yAxisIndex":1,"data":[{"name":"北京","value":2626.41},{"name":"天津","value":3709.78},{"name":"河北","value":8701.34},{"name":"山西","value":4242.36},{"name":"内蒙古","value":4376.19},{"name":"辽宁","value":7158.84},{"name":"吉林","value":3097.12},{"name":"黑龙江","value":4319.75},{"name":"上海","value":6085.84},{"name":"江苏","value":16993.34},{"name":"浙江","value":11567.42},{"name":"安徽","value":4198.93},{"name":"福建","value":5318.44},{"name":"江西","value":3554.81},{"name":"山东","value":17571.98},{"name":"河南","value":10259.99},{"name":"湖北","value":5082.07},{"name":"湖南","value":5028.93},{"name":"广东","value":18502.2},{"name":"广西","value":3037.74},{"name":"海南","value":423.55},{"name":"重庆","value":3057.78},{"name":"四川","value":5823.39},{"name":"贵州","value":1370.03},{"name":"云南","value":2452.75},{"name":"西藏","value":115.56},{"name":"陕西","value":3861.12},{"name":"甘肃","value":1470.34},{"name":"青海","value":557.12},{"name":"宁夏","value":609.98},{"name":"新疆","value":2070.76}]},{"name":"第三产业","_name":"TI","yAxisIndex":1,"data":[{"name":"北京","value":8375.76},{"name":"天津","value":2886.65},{"name":"河北","value":5276.04},{"name":"山西","value":2759.46},{"name":"内蒙古","value":3212.06},{"name":"辽宁","value":5207.72},{"name":"吉林","value":2412.26},{"name":"黑龙江","value":2905.68},{"name":"上海","value":7872.23},{"name":"江苏","value":11888.53},{"name":"浙江","value":8799.31},{"name":"安徽","value":3234.64},{"name":"福建","value":4346.4},{"name":"江西","value":2355.86},{"name":"山东","value":10358.64},{"name":"河南","value":5099.76},{"name":"湖北","value":4466.85},{"name":"湖南","value":4633.67},{"name":"广东","value":16321.46},{"name":"广西","value":2529.51},{"name":"海南","value":643.47},{"name":"重庆","value":2160.48},{"name":"四川","value":4561.69},{"name":"贵州","value":1652.34},{"name":"云南","value":2218.81},{"name":"西藏","value":218.67},{"name":"陕西","value":2699.74},{"name":"甘肃","value":1234.21},{"name":"青海","value":355.93},{"name":"宁夏","value":475},{"name":"新疆","value":1421.38}]}
 ]
 },
 {
 "title":{"text":"2009全国宏观经济指标"},
 "series":[
 {"name":"GDP","_name":"GDP","data":[{"name":"北京","value":12153.03},{"name":"天津","value":7521.85},{"name":"河北","value":17235.48},{"name":"山西","value":7358.31},{"name":"内蒙古","value":9740.25},{"name":"辽宁","value":15212.49},{"name":"吉林","value":7278.75},{"name":"黑龙江","value":8587},{"name":"上海","value":15046.45},{"name":"江苏","value":34457.3},{"name":"浙江","value":22990.35},{"name":"安徽","value":10062.82},{"name":"福建","value":12236.53},{"name":"江西","value":7655.18},{"name":"山东","value":33896.65},{"name":"河南","value":19480.46},{"name":"湖北","value":12961.1},{"name":"湖南","value":13059.69},{"name":"广东","value":39482.56},{"name":"广西","value":7759.16},{"name":"海南","value":1654.21},{"name":"重庆","value":6530.01},{"name":"四川","value":14151.28},{"name":"贵州","value":3912.68},{"name":"云南","value":6169.75},{"name":"西藏","value":441.36},{"name":"陕西","value":8169.8},{"name":"甘肃","value":3387.56},{"name":"青海","value":1081.27},{"name":"宁夏","value":1353.31},{"name":"新疆","value":4277.05}]},{"name":"金融","_name":"Financial","yAxisIndex":1,"data":[{"name":"北京","value":1603.63},{"name":"天津","value":461.2},{"name":"河北","value":525.67},{"name":"山西","value":361.64},{"name":"内蒙古","value":291.1},{"name":"辽宁","value":560.2},{"name":"吉林","value":180.83},{"name":"黑龙江","value":227.54},{"name":"上海","value":1804.28},{"name":"江苏","value":1596.98},{"name":"浙江","value":1899.33},{"name":"安徽","value":359.6},{"name":"福建","value":612.2},{"name":"江西","value":165.1},{"name":"山东","value":1044.9},{"name":"河南","value":499.92},{"name":"湖北","value":479.11},{"name":"湖南","value":402.57},{"name":"广东","value":2283.29},{"name":"广西","value":336.82},{"name":"海南","value":65.73},{"name":"重庆","value":389.97},{"name":"四川","value":524.63},{"name":"贵州","value":194.44},{"name":"云南","value":351.74},{"name":"西藏","value":23.17},{"name":"陕西","value":336.21},{"name":"甘肃","value":88.27},{"name":"青海","value":45.63},{"name":"宁夏","value":75.54},{"name":"新疆","value":198.87}]},{"name":"房地产","_name":"Estate","yAxisIndex":1,"data":[{"name":"北京","value":1062.47},{"name":"天津","value":308.73},{"name":"河北","value":612.4},{"name":"山西","value":173.31},{"name":"内蒙古","value":286.65},{"name":"辽宁","value":605.27},{"name":"吉林","value":200.14},{"name":"黑龙江","value":301.18},{"name":"上海","value":1237.56},{"name":"江苏","value":2025.39},{"name":"浙江","value":1316.84},{"name":"安徽","value":497.94},{"name":"福建","value":656.61},{"name":"江西","value":305.9},{"name":"山东","value":1329.59},{"name":"河南","value":622.98},{"name":"湖北","value":546.11},{"name":"湖南","value":400.11},{"name":"广东","value":2470.63},{"name":"广西","value":348.98},{"name":"海南","value":121.76},{"name":"重庆","value":229.09},{"name":"四川","value":548.14},{"name":"贵州","value":136.15},{"name":"云南","value":205.14},{"name":"西藏","value":13.28},{"name":"陕西","value":239.92},{"name":"甘肃","value":101.37},{"name":"青海","value":23.05},{"name":"宁夏","value":47.56},{"name":"新疆","value":115.23}]},{"name":"第一产业","_name":"PI","yAxisIndex":1,"data":[{"name":"北京","value":118.29},{"name":"天津","value":128.85},{"name":"河北","value":2207.34},{"name":"山西","value":477.59},{"name":"内蒙古","value":929.6},{"name":"辽宁","value":1414.9},{"name":"吉林","value":980.57},{"name":"黑龙江","value":1154.33},{"name":"上海","value":113.82},{"name":"江苏","value":2261.86},{"name":"浙江","value":1163.08},{"name":"安徽","value":1495.45},{"name":"福建","value":1182.74},{"name":"江西","value":1098.66},{"name":"山东","value":3226.64},{"name":"河南","value":2769.05},{"name":"湖北","value":1795.9},{"name":"湖南","value":1969.69},{"name":"广东","value":2010.27},{"name":"广西","value":1458.49},{"name":"海南","value":462.19},{"name":"重庆","value":606.8},{"name":"四川","value":2240.61},{"name":"贵州","value":550.27},{"name":"云南","value":1067.6},{"name":"西藏","value":63.88},{"name":"陕西","value":789.64},{"name":"甘肃","value":497.05},{"name":"青海","value":107.4},{"name":"宁夏","value":127.25},{"name":"新疆","value":759.74}]},{"name":"第二产业","_name":"SI","yAxisIndex":1,"data":[{"name":"北京","value":2855.55},{"name":"天津","value":3987.84},{"name":"河北","value":8959.83},{"name":"山西","value":3993.8},{"name":"内蒙古","value":5114},{"name":"辽宁","value":7906.34},{"name":"吉林","value":3541.92},{"name":"黑龙江","value":4060.72},{"name":"上海","value":6001.78},{"name":"江苏","value":18566.37},{"name":"浙江","value":11908.49},{"name":"安徽","value":4905.22},{"name":"福建","value":6005.3},{"name":"江西","value":3919.45},{"name":"山东","value":18901.83},{"name":"河南","value":11010.5},{"name":"湖北","value":6038.08},{"name":"湖南","value":5687.19},{"name":"广东","value":19419.7},{"name":"广西","value":3381.54},{"name":"海南","value":443.43},{"name":"重庆","value":3448.77},{"name":"四川","value":6711.87},{"name":"贵州","value":1476.62},{"name":"云南","value":2582.53},{"name":"西藏","value":136.63},{"name":"陕西","value":4236.42},{"name":"甘肃","value":1527.24},{"name":"青海","value":575.33},{"name":"宁夏","value":662.32},{"name":"新疆","value":1929.59}]},{"name":"第三产业","_name":"TI","yAxisIndex":1,"data":[{"name":"北京","value":9179.19},{"name":"天津","value":3405.16},{"name":"河北","value":6068.31},{"name":"山西","value":2886.92},{"name":"内蒙古","value":3696.65},{"name":"辽宁","value":5891.25},{"name":"吉林","value":2756.26},{"name":"黑龙江","value":3371.95},{"name":"上海","value":8930.85},{"name":"江苏","value":13629.07},{"name":"浙江","value":9918.78},{"name":"安徽","value":3662.15},{"name":"福建","value":5048.49},{"name":"江西","value":2637.07},{"name":"山东","value":11768.18},{"name":"河南","value":5700.91},{"name":"湖北","value":5127.12},{"name":"湖南","value":5402.81},{"name":"广东","value":18052.59},{"name":"广西","value":2919.13},{"name":"海南","value":748.59},{"name":"重庆","value":2474.44},{"name":"四川","value":5198.8},{"name":"贵州","value":1885.79},{"name":"云南","value":2519.62},{"name":"西藏","value":240.85},{"name":"陕西","value":3143.74},{"name":"甘肃","value":1363.27},{"name":"青海","value":398.54},{"name":"宁夏","value":563.74},{"name":"新疆","value":1587.72}]}
 ]
 },
 {
 "title":{"text":"2010全国宏观经济指标"},
 "series":[
 {"name":"GDP","_name":"GDP","data":[{"name":"北京","value":14113.58},{"name":"天津","value":9224.46},{"name":"河北","value":20394.26},{"name":"山西","value":9200.86},{"name":"内蒙古","value":11672},{"name":"辽宁","value":18457.27},{"name":"吉林","value":8667.58},{"name":"黑龙江","value":10368.6},{"name":"上海","value":17165.98},{"name":"江苏","value":41425.48},{"name":"浙江","value":27722.31},{"name":"安徽","value":12359.33},{"name":"福建","value":14737.12},{"name":"江西","value":9451.26},{"name":"山东","value":39169.92},{"name":"河南","value":23092.36},{"name":"湖北","value":15967.61},{"name":"湖南","value":16037.96},{"name":"广东","value":46013.06},{"name":"广西","value":9569.85},{"name":"海南","value":2064.5},{"name":"重庆","value":7925.58},{"name":"四川","value":17185.48},{"name":"贵州","value":4602.16},{"name":"云南","value":7224.18},{"name":"西藏","value":507.46},{"name":"陕西","value":10123.48},{"name":"甘肃","value":4120.75},{"name":"青海","value":1350.43},{"name":"宁夏","value":1689.65},{"name":"新疆","value":5437.47}]},{"name":"金融","_name":"Financial","yAxisIndex":1,"data":[{"name":"北京","value":1863.61},{"name":"天津","value":572.99},{"name":"河北","value":615.42},{"name":"山西","value":448.3},{"name":"内蒙古","value":346.44},{"name":"辽宁","value":639.27},{"name":"吉林","value":190.12},{"name":"黑龙江","value":304.59},{"name":"上海","value":1950.96},{"name":"江苏","value":2105.92},{"name":"浙江","value":2326.58},{"name":"安徽","value":396.17},{"name":"福建","value":767.58},{"name":"江西","value":241.49},{"name":"山东","value":1361.45},{"name":"河南","value":697.68},{"name":"湖北","value":561.27},{"name":"湖南","value":463.16},{"name":"广东","value":2658.76},{"name":"广西","value":384.53},{"name":"海南","value":78.12},{"name":"重庆","value":496.56},{"name":"四川","value":654.7},{"name":"贵州","value":231.51},{"name":"云南","value":375.08},{"name":"西藏","value":27.08},{"name":"陕西","value":384.75},{"name":"甘肃","value":100.54},{"name":"青海","value":54.53},{"name":"宁夏","value":97.87},{"name":"新疆","value":225.2}]},{"name":"房地产","_name":"Estate","yAxisIndex":1,"data":[{"name":"北京","value":1006.52},{"name":"天津","value":377.59},{"name":"河北","value":697.79},{"name":"山西","value":192},{"name":"内蒙古","value":309.25},{"name":"辽宁","value":733.37},{"name":"吉林","value":212.32},{"name":"黑龙江","value":391.89},{"name":"上海","value":1002.5},{"name":"江苏","value":2600.95},{"name":"浙江","value":1618.17},{"name":"安徽","value":532.17},{"name":"福建","value":679.03},{"name":"江西","value":340.56},{"name":"山东","value":1622.15},{"name":"河南","value":773.23},{"name":"湖北","value":564.41},{"name":"湖南","value":464.21},{"name":"广东","value":2813.95},{"name":"广西","value":405.79},{"name":"海南","value":188.33},{"name":"重庆","value":266.38},{"name":"四川","value":558.56},{"name":"贵州","value":139.64},{"name":"云南","value":223.45},{"name":"西藏","value":14.54},{"name":"陕西","value":315.95},{"name":"甘肃","value":110.02},{"name":"青海","value":25.41},{"name":"宁夏","value":60.53},{"name":"新疆","value":143.44}]},{"name":"第一产业","_name":"PI","yAxisIndex":1,"data":[{"name":"北京","value":124.36},{"name":"天津","value":145.58},{"name":"河北","value":2562.81},{"name":"山西","value":554.48},{"name":"内蒙古","value":1095.28},{"name":"辽宁","value":1631.08},{"name":"吉林","value":1050.15},{"name":"黑龙江","value":1302.9},{"name":"上海","value":114.15},{"name":"江苏","value":2540.1},{"name":"浙江","value":1360.56},{"name":"安徽","value":1729.02},{"name":"福建","value":1363.67},{"name":"江西","value":1206.98},{"name":"山东","value":3588.28},{"name":"河南","value":3258.09},{"name":"湖北","value":2147},{"name":"湖南","value":2325.5},{"name":"广东","value":2286.98},{"name":"广西","value":1675.06},{"name":"海南","value":539.83},{"name":"重庆","value":685.38},{"name":"四川","value":2482.89},{"name":"贵州","value":625.03},{"name":"云南","value":1108.38},{"name":"西藏","value":68.72},{"name":"陕西","value":988.45},{"name":"甘肃","value":599.28},{"name":"青海","value":134.92},{"name":"宁夏","value":159.29},{"name":"新疆","value":1078.63}]},{"name":"第二产业","_name":"SI","yAxisIndex":1,"data":[{"name":"北京","value":3388.38},{"name":"天津","value":4840.23},{"name":"河北","value":10707.68},{"name":"山西","value":5234},{"name":"内蒙古","value":6367.69},{"name":"辽宁","value":9976.82},{"name":"吉林","value":4506.31},{"name":"黑龙江","value":5025.15},{"name":"上海","value":7218.32},{"name":"江苏","value":21753.93},{"name":"浙江","value":14297.93},{"name":"安徽","value":6436.62},{"name":"福建","value":7522.83},{"name":"江西","value":5122.88},{"name":"山东","value":21238.49},{"name":"河南","value":13226.38},{"name":"湖北","value":7767.24},{"name":"湖南","value":7343.19},{"name":"广东","value":23014.53},{"name":"广西","value":4511.68},{"name":"海南","value":571},{"name":"重庆","value":4359.12},{"name":"四川","value":8672.18},{"name":"贵州","value":1800.06},{"name":"云南","value":3223.49},{"name":"西藏","value":163.92},{"name":"陕西","value":5446.1},{"name":"甘肃","value":1984.97},{"name":"青海","value":744.63},{"name":"宁夏","value":827.91},{"name":"新疆","value":2592.15}]},{"name":"第三产业","_name":"TI","yAxisIndex":1,"data":[{"name":"北京","value":10600.84},{"name":"天津","value":4238.65},{"name":"河北","value":7123.77},{"name":"山西","value":3412.38},{"name":"内蒙古","value":4209.03},{"name":"辽宁","value":6849.37},{"name":"吉林","value":3111.12},{"name":"黑龙江","value":4040.55},{"name":"上海","value":9833.51},{"name":"江苏","value":17131.45},{"name":"浙江","value":12063.82},{"name":"安徽","value":4193.69},{"name":"福建","value":5850.62},{"name":"江西","value":3121.4},{"name":"山东","value":14343.14},{"name":"河南","value":6607.89},{"name":"湖北","value":6053.37},{"name":"湖南","value":6369.27},{"name":"广东","value":20711.55},{"name":"广西","value":3383.11},{"name":"海南","value":953.67},{"name":"重庆","value":2881.08},{"name":"四川","value":6030.41},{"name":"贵州","value":2177.07},{"name":"云南","value":2892.31},{"name":"西藏","value":274.82},{"name":"陕西","value":3688.93},{"name":"甘肃","value":1536.5},{"name":"青海","value":470.88},{"name":"宁夏","value":702.45},{"name":"新疆","value":1766.69}]}
 ]
 },
 {
 "title":{"text":"2011全国宏观经济指标"},
 "series":[
 {"name":"GDP","_name":"GDP","data":[{"name":"北京","value":16251.93},{"name":"天津","value":11307.28},{"name":"河北","value":24515.76},{"name":"山西","value":11237.55},{"name":"内蒙古","value":14359.88},{"name":"辽宁","value":22226.7},{"name":"吉林","value":10568.83},{"name":"黑龙江","value":12582},{"name":"上海","value":19195.69},{"name":"江苏","value":49110.27},{"name":"浙江","value":32318.85},{"name":"安徽","value":15300.65},{"name":"福建","value":17560.18},{"name":"江西","value":11702.82},{"name":"山东","value":45361.85},{"name":"河南","value":26931.03},{"name":"湖北","value":19632.26},{"name":"湖南","value":19669.56},{"name":"广东","value":53210.28},{"name":"广西","value":11720.87},{"name":"海南","value":2522.66},{"name":"重庆","value":10011.37},{"name":"四川","value":21026.68},{"name":"贵州","value":5701.84},{"name":"云南","value":8893.12},{"name":"西藏","value":605.83},{"name":"陕西","value":12512.3},{"name":"甘肃","value":5020.37},{"name":"青海","value":1670.44},{"name":"宁夏","value":2102.21},{"name":"新疆","value":6610.05}]},{"name":"金融","_name":"Financial","yAxisIndex":1,"data":[{"name":"北京","value":2215.41},{"name":"天津","value":756.5},{"name":"河北","value":746.01},{"name":"山西","value":519.32},{"name":"内蒙古","value":447.46},{"name":"辽宁","value":755.57},{"name":"吉林","value":207.65},{"name":"黑龙江","value":370.78},{"name":"上海","value":2277.4},{"name":"江苏","value":2600.11},{"name":"浙江","value":2730.29},{"name":"安徽","value":503.85},{"name":"福建","value":862.41},{"name":"江西","value":357.44},{"name":"山东","value":1640.41},{"name":"河南","value":868.2},{"name":"湖北","value":674.57},{"name":"湖南","value":501.09},{"name":"广东","value":2916.13},{"name":"广西","value":445.37},{"name":"海南","value":105.24},{"name":"重庆","value":704.66},{"name":"四川","value":868.15},{"name":"贵州","value":297.27},{"name":"云南","value":456.23},{"name":"西藏","value":31.7},{"name":"陕西","value":432.11},{"name":"甘肃","value":145.05},{"name":"青海","value":62.56},{"name":"宁夏","value":134.18},{"name":"新疆","value":288.77}]},{"name":"房地产","_name":"Estate","yAxisIndex":1,"data":[{"name":"北京","value":1074.93},{"name":"天津","value":411.46},{"name":"河北","value":918.02},{"name":"山西","value":224.91},{"name":"内蒙古","value":384.76},{"name":"辽宁","value":876.12},{"name":"吉林","value":238.61},{"name":"黑龙江","value":492.1},{"name":"上海","value":1019.68},{"name":"江苏","value":2747.89},{"name":"浙江","value":1677.13},{"name":"安徽","value":634.92},{"name":"福建","value":911.16},{"name":"江西","value":402.51},{"name":"山东","value":1838.14},{"name":"河南","value":987},{"name":"湖北","value":634.67},{"name":"湖南","value":518.04},{"name":"广东","value":3321.31},{"name":"广西","value":465.68},{"name":"海南","value":208.71},{"name":"重庆","value":396.28},{"name":"四川","value":620.62},{"name":"贵州","value":160.3},{"name":"云南","value":222.31},{"name":"西藏","value":17.44},{"name":"陕西","value":398.03},{"name":"甘肃","value":134.25},{"name":"青海","value":29.05},{"name":"宁夏","value":79.01},{"name":"新疆","value":176.22}]},{"name":"第一产业","_name":"PI","yAxisIndex":1,"data":[{"name":"北京","value":136.27},{"name":"天津","value":159.72},{"name":"河北","value":2905.73},{"name":"山西","value":641.42},{"name":"内蒙古","value":1306.3},{"name":"辽宁","value":1915.57},{"name":"吉林","value":1277.44},{"name":"黑龙江","value":1701.5},{"name":"上海","value":124.94},{"name":"江苏","value":3064.78},{"name":"浙江","value":1583.04},{"name":"安徽","value":2015.31},{"name":"福建","value":1612.24},{"name":"江西","value":1391.07},{"name":"山东","value":3973.85},{"name":"河南","value":3512.24},{"name":"湖北","value":2569.3},{"name":"湖南","value":2768.03},{"name":"广东","value":2665.2},{"name":"广西","value":2047.23},{"name":"海南","value":659.23},{"name":"重庆","value":844.52},{"name":"四川","value":2983.51},{"name":"贵州","value":726.22},{"name":"云南","value":1411.01},{"name":"西藏","value":74.47},{"name":"陕西","value":1220.9},{"name":"甘肃","value":678.75},{"name":"青海","value":155.08},{"name":"宁夏","value":184.14},{"name":"新疆","value":1139.03}]},{"name":"第二产业","_name":"SI","yAxisIndex":1,"data":[{"name":"北京","value":3752.48},{"name":"天津","value":5928.32},{"name":"河北","value":13126.86},{"name":"山西","value":6635.26},{"name":"内蒙古","value":8037.69},{"name":"辽宁","value":12152.15},{"name":"吉林","value":5611.48},{"name":"黑龙江","value":5962.41},{"name":"上海","value":7927.89},{"name":"江苏","value":25203.28},{"name":"浙江","value":16555.58},{"name":"安徽","value":8309.38},{"name":"福建","value":9069.2},{"name":"江西","value":6390.55},{"name":"山东","value":24017.11},{"name":"河南","value":15427.08},{"name":"湖北","value":9815.94},{"name":"湖南","value":9361.99},{"name":"广东","value":26447.38},{"name":"广西","value":5675.32},{"name":"海南","value":714.5},{"name":"重庆","value":5543.04},{"name":"四川","value":11029.13},{"name":"贵州","value":2194.33},{"name":"云南","value":3780.32},{"name":"西藏","value":208.79},{"name":"陕西","value":6935.59},{"name":"甘肃","value":2377.83},{"name":"青海","value":975.18},{"name":"宁夏","value":1056.15},{"name":"新疆","value":3225.9}]},{"name":"第三产业","_name":"TI","yAxisIndex":1,"data":[{"name":"北京","value":12363.18},{"name":"天津","value":5219.24},{"name":"河北","value":8483.17},{"name":"山西","value":3960.87},{"name":"内蒙古","value":5015.89},{"name":"辽宁","value":8158.98},{"name":"吉林","value":3679.91},{"name":"黑龙江","value":4918.09},{"name":"上海","value":11142.86},{"name":"江苏","value":20842.21},{"name":"浙江","value":14180.23},{"name":"安徽","value":4975.96},{"name":"福建","value":6878.74},{"name":"江西","value":3921.2},{"name":"山东","value":17370.89},{"name":"河南","value":7991.72},{"name":"湖北","value":7247.02},{"name":"湖南","value":7539.54},{"name":"广东","value":24097.7},{"name":"广西","value":3998.33},{"name":"海南","value":1148.93},{"name":"重庆","value":3623.81},{"name":"四川","value":7014.04},{"name":"贵州","value":2781.29},{"name":"云南","value":3701.79},{"name":"西藏","value":322.57},{"name":"陕西","value":4355.81},{"name":"甘肃","value":1963.79},{"name":"青海","value":540.18},{"name":"宁夏","value":861.92},{"name":"新疆","value":2245.12}]}
 ]
 }
 ]
 }
 */