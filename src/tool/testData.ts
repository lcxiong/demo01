const a = 1;

const chart = {
    "chart_title": "路段实时对比统计图",
    "chart_type": 1,
    "sub_title": "(最新)",
    "left_yaxis": {
        "type": "value",
        "name": "",
        "min": 0,
        "max": 0,
        "interval": 0,
        "labelformat": null
    },
    "right_yaxis": {
        "type": "value",
        "name": null,
        "min": 0,
        "max": 0,
        "interval": 0,
        "labelformat": null
    },
    "xaxis_data": [
        "贵都高速",
        "贵瓮高速",
        "贵黔高速",
        "安江高速",
        "道安高速",
        "沿德高速"
    ],
    "series_data_list": [
        {
            "name": "评分",
            "yAxisIndex": 0,
            "type": "line",
            "data": [
                100,
                100,
                50,
                100,
                50,
                0
            ]
        },
        {
            "name": "正常",
            "yAxisIndex": 1,
            "type": "bar",
            "data": [
                12,
                4,
                2,
                5,
                6,
                0
            ]
        },
        {
            "name": "报警",
            "yAxisIndex": 1,
            "type": "bar",
            "data": [
                0,
                0,
                2,
                0,
                6,
                6
            ]
        }
    ]
}

const gis_info = {
    "basic_info": {
        "map_key": "b500805fc94f5a6c33684be251245258",
        "map_style": "lbs.amap.com/dev/mapstyle/mapshare/7abb3f08c247dc479ad2426bd541f9a9",
        "center_lon": 108.249107,
        "center_lat": 27.4943829,
        "zoom_level": 9
    },
    "unit_region_info": [
        {
            "road_region_info": [
                {
                    "id": 500,
                    "start_lon": 108.6447,
                    "start_lat": 27.69077,
                    "end_lon": 108.644768,
                    "end_lat": 27.6886272
                },
                {
                    "id": 501,
                    "start_lon": 108.644768,
                    "start_lat": 27.6886272,
                    "end_lon": 108.643539,
                    "end_lat": 27.68471
                },
                {
                    "id": 502,
                    "start_lon": 108.643539,
                    "start_lat": 27.68471,
                    "end_lon": 108.640717,
                    "end_lat": 27.680481
                },
                {
                    "id": 503,
                    "start_lon": 108.640717,
                    "start_lat": 27.680481,
                    "end_lon": 108.634834,
                    "end_lat": 27.6752357
                },
                {
                    "id": 504,
                    "start_lon": 108.634834,
                    "start_lat": 27.6752357,
                    "end_lon": 108.631012,
                    "end_lat": 27.6691933
                },
                {
                    "id": 505,
                    "start_lon": 108.631012,
                    "start_lat": 27.6691933,
                    "end_lon": 108.6272,
                    "end_lat": 27.66182
                },
                {
                    "id": 506,
                    "start_lon": 108.6272,
                    "start_lat": 27.66182,
                    "end_lon": 108.625648,
                    "end_lat": 27.6579037
                },
                {
                    "id": 507,
                    "start_lon": 108.625648,
                    "start_lat": 27.6579037,
                    "end_lon": 108.625267,
                    "end_lat": 27.65224
                },
                {
                    "id": 508,
                    "start_lon": 108.625267,
                    "start_lat": 27.65224,
                    "end_lon": 108.625092,
                    "end_lat": 27.6491985
                },
                {
                    "id": 509,
                    "start_lon": 108.625092,
                    "start_lat": 27.6491985,
                    "end_lon": 108.623505,
                    "end_lat": 27.6458168
                },
                {
                    "id": 510,
                    "start_lon": 108.623505,
                    "start_lat": 27.6458168,
                    "end_lon": 108.6202,
                    "end_lat": 27.642889
                },
                {
                    "id": 511,
                    "start_lon": 108.6202,
                    "start_lat": 27.642889,
                    "end_lon": 108.615341,
                    "end_lat": 27.6413212
                },
                {
                    "id": 512,
                    "start_lon": 108.615341,
                    "start_lat": 27.6413212,
                    "end_lon": 108.610367,
                    "end_lat": 27.6376724
                },
                {
                    "id": 513,
                    "start_lon": 108.610367,
                    "start_lat": 27.6376724,
                    "end_lon": 108.607491,
                    "end_lat": 27.6344414
                },
                {
                    "id": 514,
                    "start_lon": 108.607491,
                    "start_lat": 27.6344414,
                    "end_lon": 108.6011,
                    "end_lat": 27.6306763
                },
                {
                    "id": 515,
                    "start_lon": 108.6011,
                    "start_lat": 27.6306763,
                    "end_lon": 108.594185,
                    "end_lat": 27.6268368
                },
                {
                    "id": 516,
                    "start_lon": 108.594185,
                    "start_lat": 27.6268368,
                    "end_lon": 108.585091,
                    "end_lat": 27.62022
                },
                {
                    "id": 517,
                    "start_lon": 108.585091,
                    "start_lat": 27.62022,
                    "end_lon": 108.576332,
                    "end_lat": 27.6183949
                },
                {
                    "id": 518,
                    "start_lon": 108.576332,
                    "start_lat": 27.6183949,
                    "end_lon": 108.569122,
                    "end_lat": 27.6164188
                },
                {
                    "id": 519,
                    "start_lon": 108.569122,
                    "start_lat": 27.6164188,
                    "end_lon": 108.563248,
                    "end_lat": 27.61425
                },
                {
                    "id": 520,
                    "start_lon": 108.563248,
                    "start_lat": 27.61425,
                    "end_lon": 108.556419,
                    "end_lat": 27.61079
                },
                {
                    "id": 521,
                    "start_lon": 108.556419,
                    "start_lat": 27.61079,
                    "end_lon": 108.548012,
                    "end_lat": 27.60657
                },
                {
                    "id": 522,
                    "start_lon": 108.548012,
                    "start_lat": 27.60657,
                    "end_lon": 108.542427,
                    "end_lat": 27.60478
                },
                {
                    "id": 523,
                    "start_lon": 108.542427,
                    "start_lat": 27.60478,
                    "end_lon": 108.537064,
                    "end_lat": 27.6016636
                },
                {
                    "id": 524,
                    "start_lon": 108.537064,
                    "start_lat": 27.6016636,
                    "end_lon": 108.531876,
                    "end_lat": 27.5984688
                },
                {
                    "id": 525,
                    "start_lon": 108.531876,
                    "start_lat": 27.5984688,
                    "end_lon": 108.524445,
                    "end_lat": 27.5959969
                },
                {
                    "id": 526,
                    "start_lon": 108.524445,
                    "start_lat": 27.5959969,
                    "end_lon": 108.518829,
                    "end_lat": 27.5937138
                },
                {
                    "id": 527,
                    "start_lon": 108.518829,
                    "start_lat": 27.5937138,
                    "end_lon": 108.510071,
                    "end_lat": 27.5940552
                },
                {
                    "id": 528,
                    "start_lon": 108.510071,
                    "start_lat": 27.5940552,
                    "end_lon": 108.505524,
                    "end_lat": 27.59459
                },
                {
                    "id": 529,
                    "start_lon": 108.505524,
                    "start_lat": 27.59459,
                    "end_lon": 108.501663,
                    "end_lat": 27.5926876
                },
                {
                    "id": 530,
                    "start_lon": 108.501663,
                    "start_lat": 27.5926876,
                    "end_lon": 108.494621,
                    "end_lat": 27.5888462
                },
                {
                    "id": 531,
                    "start_lon": 108.494621,
                    "start_lat": 27.5888462,
                    "end_lon": 108.488182,
                    "end_lat": 27.5816956
                },
                {
                    "id": 532,
                    "start_lon": 108.488182,
                    "start_lat": 27.5816956,
                    "end_lon": 108.478569,
                    "end_lat": 27.57439
                },
                {
                    "id": 533,
                    "start_lon": 108.478569,
                    "start_lat": 27.57439,
                    "end_lon": 108.472069,
                    "end_lat": 27.5728683
                },
                {
                    "id": 534,
                    "start_lon": 108.472069,
                    "start_lat": 27.5728683,
                    "end_lon": 108.454926,
                    "end_lat": 27.561
                },
                {
                    "id": 535,
                    "start_lon": 108.454926,
                    "start_lat": 27.561,
                    "end_lon": 108.438789,
                    "end_lat": 27.5511074
                },
                {
                    "id": 536,
                    "start_lon": 108.438789,
                    "start_lat": 27.5511074,
                    "end_lon": 108.423,
                    "end_lat": 27.5482159
                },
                {
                    "id": 537,
                    "start_lon": 108.423,
                    "start_lat": 27.5482159,
                    "end_lon": 108.410126,
                    "end_lat": 27.5403
                },
                {
                    "id": 538,
                    "start_lon": 108.410126,
                    "start_lat": 27.5403,
                    "end_lon": 108.385231,
                    "end_lat": 27.54015
                },
                {
                    "id": 539,
                    "start_lon": 108.385231,
                    "start_lat": 27.54015,
                    "end_lon": 108.370468,
                    "end_lat": 27.5375614
                },
                {
                    "id": 540,
                    "start_lon": 108.370468,
                    "start_lat": 27.5375614,
                    "end_lon": 108.355186,
                    "end_lat": 27.52508
                },
                {
                    "id": 541,
                    "start_lon": 108.355186,
                    "start_lat": 27.52508,
                    "end_lon": 108.339737,
                    "end_lat": 27.5160961
                },
                {
                    "id": 542,
                    "start_lon": 108.339737,
                    "start_lat": 27.5160961,
                    "end_lon": 108.31485,
                    "end_lat": 27.5019379
                },
                {
                    "id": 543,
                    "start_lon": 108.31485,
                    "start_lat": 27.5019379,
                    "end_lon": 108.2903,
                    "end_lat": 27.4928017
                },
                {
                    "id": 544,
                    "start_lon": 108.2903,
                    "start_lat": 27.4928017,
                    "end_lon": 108.270386,
                    "end_lat": 27.4928017
                },
                {
                    "id": 545,
                    "start_lon": 108.270386,
                    "start_lat": 27.4928017,
                    "end_lon": 108.25425,
                    "end_lat": 27.48732
                },
                {
                    "id": 546,
                    "start_lon": 108.25425,
                    "start_lat": 27.48732,
                    "end_lon": 108.243263,
                    "end_lat": 27.47605
                },
                {
                    "id": 547,
                    "start_lon": 108.243263,
                    "start_lat": 27.47605,
                    "end_lon": 108.235489,
                    "end_lat": 27.4610157
                },
                {
                    "id": 548,
                    "start_lon": 108.235489,
                    "start_lat": 27.4610157,
                    "end_lon": 108.206139,
                    "end_lat": 27.4447174
                },
                {
                    "id": 549,
                    "start_lon": 108.206139,
                    "start_lat": 27.4447174,
                    "end_lon": 108.17524,
                    "end_lat": 27.41912
                },
                {
                    "id": 550,
                    "start_lon": 108.17524,
                    "start_lat": 27.41912,
                    "end_lon": 108.142105,
                    "end_lat": 27.3956528
                },
                {
                    "id": 551,
                    "start_lon": 108.142105,
                    "start_lat": 27.3956528,
                    "end_lon": 108.087692,
                    "end_lat": 27.3724823
                },
                {
                    "id": 552,
                    "start_lon": 108.087692,
                    "start_lat": 27.3724823,
                    "end_lon": 108.049751,
                    "end_lat": 27.3479385
                },
                {
                    "id": 553,
                    "start_lon": 108.049751,
                    "start_lat": 27.3479385,
                    "end_lon": 108.028122,
                    "end_lat": 27.3343658
                },
                {
                    "id": 554,
                    "start_lon": 108.028122,
                    "start_lat": 27.3343658,
                    "end_lon": 108.001,
                    "end_lat": 27.3192673
                },
                {
                    "id": 555,
                    "start_lon": 108.001,
                    "start_lat": 27.3192673,
                    "end_lon": 107.975082,
                    "end_lat": 27.29822
                },
                {
                    "id": 556,
                    "start_lon": 107.975082,
                    "start_lat": 27.29822,
                    "end_lon": 107.963921,
                    "end_lat": 27.27381
                },
                {
                    "id": 557,
                    "start_lon": 107.963921,
                    "start_lat": 27.27381,
                    "end_lon": 107.939545,
                    "end_lat": 27.259161
                },
                {
                    "id": 558,
                    "start_lon": 107.939545,
                    "start_lat": 27.259161,
                    "end_lon": 107.919464,
                    "end_lat": 27.2315388
                },
                {
                    "id": 559,
                    "start_lon": 107.919464,
                    "start_lat": 27.2315388,
                    "end_lon": 107.893883,
                    "end_lat": 27.2335224
                },
                {
                    "id": 560,
                    "start_lon": 107.893883,
                    "start_lat": 27.2335224,
                    "end_lon": 107.871567,
                    "end_lat": 27.2249737
                },
                {
                    "id": 561,
                    "start_lon": 107.871567,
                    "start_lat": 27.2249737,
                    "end_lon": 107.841354,
                    "end_lat": 27.2118454
                },
                {
                    "id": 562,
                    "start_lon": 107.841354,
                    "start_lat": 27.2118454,
                    "end_lon": 107.832047,
                    "end_lat": 27.2061977
                },
                {
                    "id": 563,
                    "start_lon": 107.832047,
                    "start_lat": 27.2061977,
                    "end_lon": 107.81694,
                    "end_lat": 27.2024574
                },
                {
                    "id": 564,
                    "start_lon": 107.81694,
                    "start_lat": 27.2024574,
                    "end_lon": 107.807671,
                    "end_lat": 27.200243
                },
                {
                    "id": 565,
                    "start_lon": 107.807671,
                    "start_lat": 27.200243,
                    "end_lon": 107.795563,
                    "end_lat": 27.1956635
                },
                {
                    "id": 566,
                    "start_lon": 107.795563,
                    "start_lat": 27.1956635,
                    "end_lon": 107.785095,
                    "end_lat": 27.19154
                },
                {
                    "id": 567,
                    "start_lon": 107.785095,
                    "start_lat": 27.19154,
                    "end_lon": 107.773079,
                    "end_lat": 27.1900139
                },
                {
                    "id": 568,
                    "start_lon": 107.773079,
                    "start_lat": 27.1900139,
                    "end_lon": 107.761574,
                    "end_lat": 27.1900139
                },
                {
                    "id": 569,
                    "start_lon": 107.761574,
                    "start_lat": 27.1900139,
                    "end_lon": 107.752052,
                    "end_lat": 27.1852036
                },
                {
                    "id": 570,
                    "start_lon": 107.752052,
                    "start_lat": 27.1852036,
                    "end_lon": 107.746124,
                    "end_lat": 27.1806984
                },
                {
                    "id": 571,
                    "start_lon": 107.746124,
                    "start_lat": 27.1806984,
                    "end_lon": 107.736687,
                    "end_lat": 27.17436
                },
                {
                    "id": 572,
                    "start_lon": 107.736687,
                    "start_lat": 27.17436,
                    "end_lon": 107.728706,
                    "end_lat": 27.1713829
                },
                {
                    "id": 573,
                    "start_lon": 107.728706,
                    "start_lat": 27.1713829,
                    "end_lon": 107.718407,
                    "end_lat": 27.1688633
                },
                {
                    "id": 574,
                    "start_lon": 107.718407,
                    "start_lat": 27.1688633,
                    "end_lon": 107.710075,
                    "end_lat": 27.16222
                },
                {
                    "id": 575,
                    "start_lon": 107.710075,
                    "start_lat": 27.16222,
                    "end_lon": 107.6966,
                    "end_lat": 27.1585541
                },
                {
                    "id": 576,
                    "start_lon": 107.6966,
                    "start_lat": 27.1585541,
                    "end_lon": 107.6863,
                    "end_lat": 27.1532078
                },
                {
                    "id": 577,
                    "start_lon": 107.6863,
                    "start_lat": 27.1532078,
                    "end_lon": 107.677032,
                    "end_lat": 27.1496944
                },
                {
                    "id": 578,
                    "start_lon": 107.677032,
                    "start_lat": 27.1496944,
                    "end_lon": 107.668777,
                    "end_lat": 27.1461849
                },
                {
                    "id": 579,
                    "start_lon": 107.668777,
                    "start_lat": 27.1461849,
                    "end_lon": 107.6603,
                    "end_lat": 27.1431675
                },
                {
                    "id": 580,
                    "start_lon": 107.6603,
                    "start_lat": 27.1431675,
                    "end_lon": 107.653053,
                    "end_lat": 27.1424236
                },
                {
                    "id": 581,
                    "start_lon": 107.653053,
                    "start_lat": 27.1424236,
                    "end_lon": 107.647705,
                    "end_lat": 27.1389084
                },
                {
                    "id": 582,
                    "start_lon": 107.647705,
                    "start_lat": 27.1389084,
                    "end_lon": 107.640541,
                    "end_lat": 27.1349
                },
                {
                    "id": 583,
                    "start_lon": 107.640541,
                    "start_lat": 27.1349,
                    "end_lon": 107.631912,
                    "end_lat": 27.1362743
                },
                {
                    "id": 584,
                    "start_lon": 107.631912,
                    "start_lat": 27.1362743,
                    "end_lon": 107.623421,
                    "end_lat": 27.13425
                },
                {
                    "id": 585,
                    "start_lon": 107.623421,
                    "start_lat": 27.13425,
                    "end_lon": 107.604836,
                    "end_lat": 27.1315
                },
                {
                    "id": 586,
                    "start_lon": 107.604836,
                    "start_lat": 27.1315,
                    "end_lon": 107.594833,
                    "end_lat": 27.1297436
                },
                {
                    "id": 587,
                    "start_lon": 107.594833,
                    "start_lat": 27.1297436,
                    "end_lon": 107.580757,
                    "end_lat": 27.12302
                },
                {
                    "id": 588,
                    "start_lon": 107.580757,
                    "start_lat": 27.12302,
                    "end_lon": 107.564278,
                    "end_lat": 27.1242428
                },
                {
                    "id": 589,
                    "start_lon": 107.564278,
                    "start_lat": 27.1242428,
                    "end_lon": 107.54763,
                    "end_lat": 27.1192017
                },
                {
                    "id": 590,
                    "start_lon": 107.54763,
                    "start_lat": 27.1192017,
                    "end_lon": 107.535782,
                    "end_lat": 27.11263
                },
                {
                    "id": 591,
                    "start_lon": 107.535782,
                    "start_lat": 27.11263,
                    "end_lon": 107.521706,
                    "end_lat": 27.10988
                },
                {
                    "id": 592,
                    "start_lon": 107.521706,
                    "start_lat": 27.10988,
                    "end_lon": 107.501793,
                    "end_lat": 27.1007118
                },
                {
                    "id": 593,
                    "start_lon": 107.501793,
                    "start_lat": 27.1007118,
                    "end_lon": 107.48394,
                    "end_lat": 27.1010189
                },
                {
                    "id": 594,
                    "start_lon": 107.48394,
                    "start_lat": 27.1010189,
                    "end_lon": 107.468323,
                    "end_lat": 27.1008644
                },
                {
                    "id": 595,
                    "start_lon": 107.468323,
                    "start_lat": 27.1008644,
                    "end_lon": 107.471542,
                    "end_lat": 27.1145458
                },
                {
                    "id": 596,
                    "start_lon": 107.471542,
                    "start_lat": 27.1145458,
                    "end_lon": 107.480942,
                    "end_lat": 27.1105347
                },
                {
                    "id": 597,
                    "start_lon": 107.480942,
                    "start_lat": 27.1105347,
                    "end_lon": 107.4915,
                    "end_lat": 27.1121387
                },
                {
                    "id": 598,
                    "start_lon": 107.4915,
                    "start_lat": 27.1121387,
                    "end_lon": 107.500946,
                    "end_lat": 27.1132088
                },
                {
                    "id": 599,
                    "start_lon": 107.500946,
                    "start_lat": 27.1132088,
                    "end_lon": 107.508453,
                    "end_lat": 27.1172943
                },
                {
                    "id": 600,
                    "start_lon": 107.508453,
                    "start_lat": 27.1172943,
                    "end_lon": 107.519524,
                    "end_lat": 27.1219559
                },
                {
                    "id": 601,
                    "start_lon": 107.519524,
                    "start_lat": 27.1219559,
                    "end_lon": 107.528923,
                    "end_lat": 27.1228714
                },
                {
                    "id": 602,
                    "start_lon": 107.528923,
                    "start_lat": 27.1228714,
                    "end_lon": 107.535149,
                    "end_lat": 27.1247826
                },
                {
                    "id": 603,
                    "start_lon": 107.535149,
                    "start_lat": 27.1247826,
                    "end_lon": 107.544632,
                    "end_lat": 27.12948
                },
                {
                    "id": 604,
                    "start_lon": 107.544632,
                    "start_lat": 27.12948,
                    "end_lon": 107.562096,
                    "end_lat": 27.1367741
                },
                {
                    "id": 605,
                    "start_lon": 107.562096,
                    "start_lat": 27.1367741,
                    "end_lon": 107.578751,
                    "end_lat": 27.1357059
                },
                {
                    "id": 606,
                    "start_lon": 107.578751,
                    "start_lat": 27.1357059,
                    "end_lon": 107.594025,
                    "end_lat": 27.1413574
                },
                {
                    "id": 607,
                    "start_lon": 107.594025,
                    "start_lat": 27.1413574,
                    "end_lon": 107.612053,
                    "end_lat": 27.1456356
                },
                {
                    "id": 608,
                    "start_lon": 107.612053,
                    "start_lat": 27.1456356,
                    "end_lon": 107.627754,
                    "end_lat": 27.1476974
                },
                {
                    "id": 609,
                    "start_lon": 107.627754,
                    "start_lat": 27.1476974,
                    "end_lon": 107.639519,
                    "end_lat": 27.1481552
                },
                {
                    "id": 610,
                    "start_lon": 107.639519,
                    "start_lat": 27.1481552,
                    "end_lon": 107.650848,
                    "end_lat": 27.1541882
                },
                {
                    "id": 611,
                    "start_lon": 107.650848,
                    "start_lat": 27.1541882,
                    "end_lon": 107.670242,
                    "end_lat": 27.1601448
                },
                {
                    "id": 612,
                    "start_lon": 107.670242,
                    "start_lat": 27.1601448,
                    "end_lon": 107.684921,
                    "end_lat": 27.1647263
                },
                {
                    "id": 613,
                    "start_lon": 107.684921,
                    "start_lat": 27.1647263,
                    "end_lon": 107.703033,
                    "end_lat": 27.1719818
                },
                {
                    "id": 614,
                    "start_lon": 107.703033,
                    "start_lat": 27.1719818,
                    "end_lon": 107.714706,
                    "end_lat": 27.17664
                },
                {
                    "id": 615,
                    "start_lon": 107.714706,
                    "start_lat": 27.17664,
                    "end_lon": 107.72612,
                    "end_lat": 27.1827469
                },
                {
                    "id": 616,
                    "start_lon": 107.72612,
                    "start_lat": 27.1827469,
                    "end_lon": 107.735558,
                    "end_lat": 27.1874046
                },
                {
                    "id": 617,
                    "start_lon": 107.735558,
                    "start_lat": 27.1874046,
                    "end_lon": 107.745087,
                    "end_lat": 27.1932068
                },
                {
                    "id": 618,
                    "start_lon": 107.745087,
                    "start_lat": 27.1932068,
                    "end_lon": 107.76088,
                    "end_lat": 27.19962
                },
                {
                    "id": 619,
                    "start_lon": 107.76088,
                    "start_lat": 27.19962,
                    "end_lon": 107.77401,
                    "end_lat": 27.2021389
                },
                {
                    "id": 620,
                    "start_lon": 107.77401,
                    "start_lat": 27.2021389,
                    "end_lon": 107.785088,
                    "end_lat": 27.2025967
                },
                {
                    "id": 621,
                    "start_lon": 107.785088,
                    "start_lat": 27.2025967,
                    "end_lon": 107.801476,
                    "end_lat": 27.2103062
                },
                {
                    "id": 622,
                    "start_lon": 107.801476,
                    "start_lat": 27.2103062,
                    "end_lon": 107.815384,
                    "end_lat": 27.2142754
                },
                {
                    "id": 623,
                    "start_lon": 107.815384,
                    "start_lat": 27.2142754,
                    "end_lon": 107.824051,
                    "end_lat": 27.21649
                },
                {
                    "id": 624,
                    "start_lon": 107.824051,
                    "start_lat": 27.21649,
                    "end_lon": 107.833839,
                    "end_lat": 27.2248859
                },
                {
                    "id": 625,
                    "start_lon": 107.833839,
                    "start_lat": 27.2248859,
                    "end_lon": 107.842766,
                    "end_lat": 27.23244
                },
                {
                    "id": 626,
                    "start_lon": 107.842766,
                    "start_lat": 27.23244,
                    "end_lon": 107.879158,
                    "end_lat": 27.2538071
                },
                {
                    "id": 627,
                    "start_lon": 107.879158,
                    "start_lat": 27.2538071,
                    "end_lon": 107.901131,
                    "end_lat": 27.2541122
                },
                {
                    "id": 628,
                    "start_lon": 107.901131,
                    "start_lat": 27.2541122,
                    "end_lon": 107.924477,
                    "end_lat": 27.27578
                },
                {
                    "id": 629,
                    "start_lon": 107.924477,
                    "start_lat": 27.27578,
                    "end_lon": 107.941986,
                    "end_lat": 27.2980537
                },
                {
                    "id": 630,
                    "start_lon": 107.941986,
                    "start_lat": 27.2980537,
                    "end_lon": 107.955887,
                    "end_lat": 27.3175774
                },
                {
                    "id": 631,
                    "start_lon": 107.955887,
                    "start_lat": 27.3175774,
                    "end_lon": 107.986443,
                    "end_lat": 27.3372517
                },
                {
                    "id": 632,
                    "start_lon": 107.986443,
                    "start_lat": 27.3372517,
                    "end_lon": 108.015457,
                    "end_lat": 27.3582935
                },
                {
                    "id": 633,
                    "start_lon": 108.015457,
                    "start_lat": 27.3582935,
                    "end_lon": 108.037773,
                    "end_lat": 27.3784161
                },
                {
                    "id": 634,
                    "start_lon": 108.037773,
                    "start_lat": 27.3784161,
                    "end_lon": 108.071419,
                    "end_lat": 27.39
                },
                {
                    "id": 635,
                    "start_lon": 108.071419,
                    "start_lat": 27.39,
                    "end_lon": 108.113991,
                    "end_lat": 27.4131641
                },
                {
                    "id": 636,
                    "start_lon": 108.113991,
                    "start_lat": 27.4131641,
                    "end_lon": 108.139565,
                    "end_lat": 27.4274883
                },
                {
                    "id": 637,
                    "start_lon": 108.139565,
                    "start_lat": 27.4274883,
                    "end_lon": 108.158966,
                    "end_lat": 27.4412
                },
                {
                    "id": 638,
                    "start_lon": 108.158966,
                    "start_lat": 27.4412,
                    "end_lon": 108.180595,
                    "end_lat": 27.4543018
                },
                {
                    "id": 639,
                    "start_lon": 108.180595,
                    "start_lat": 27.4543018,
                    "end_lon": 108.213379,
                    "end_lat": 27.4736443
                },
                {
                    "id": 640,
                    "start_lon": 108.213379,
                    "start_lat": 27.4736443,
                    "end_lon": 108.224022,
                    "end_lat": 27.4897881
                },
                {
                    "id": 641,
                    "start_lon": 108.224022,
                    "start_lat": 27.4897881,
                    "end_lon": 108.235695,
                    "end_lat": 27.5047112
                },
                {
                    "id": 642,
                    "start_lon": 108.235695,
                    "start_lat": 27.5047112,
                    "end_lon": 108.24926,
                    "end_lat": 27.5085163
                },
                {
                    "id": 643,
                    "start_lon": 108.24926,
                    "start_lat": 27.5085163,
                    "end_lon": 108.274666,
                    "end_lat": 27.51476
                },
                {
                    "id": 644,
                    "start_lon": 108.274666,
                    "start_lat": 27.51476,
                    "end_lon": 108.28891,
                    "end_lat": 27.5175
                },
                {
                    "id": 645,
                    "start_lon": 108.28891,
                    "start_lat": 27.5175,
                    "end_lon": 108.306419,
                    "end_lat": 27.5231323
                },
                {
                    "id": 646,
                    "start_lon": 108.306419,
                    "start_lat": 27.5231323,
                    "end_lon": 108.320839,
                    "end_lat": 27.5281563
                },
                {
                    "id": 647,
                    "start_lon": 108.320839,
                    "start_lat": 27.5281563,
                    "end_lon": 108.335777,
                    "end_lat": 27.5378971
                },
                {
                    "id": 648,
                    "start_lon": 108.335777,
                    "start_lat": 27.5378971,
                    "end_lon": 108.3482,
                    "end_lat": 27.54197
                },
                {
                    "id": 649,
                    "start_lon": 108.3482,
                    "start_lat": 27.54197,
                    "end_lon": 108.359955,
                    "end_lat": 27.5514812
                },
                {
                    "id": 650,
                    "start_lon": 108.359955,
                    "start_lat": 27.5514812,
                    "end_lon": 108.3766,
                    "end_lat": 27.5581017
                },
                {
                    "id": 651,
                    "start_lon": 108.3766,
                    "start_lat": 27.5581017,
                    "end_lon": 108.386215,
                    "end_lat": 27.5552864
                },
                {
                    "id": 652,
                    "start_lon": 108.386215,
                    "start_lat": 27.5552864,
                    "end_lon": 108.401665,
                    "end_lat": 27.5555916
                },
                {
                    "id": 653,
                    "start_lon": 108.401665,
                    "start_lat": 27.5555916,
                    "end_lon": 108.419861,
                    "end_lat": 27.5634289
                },
                {
                    "id": 654,
                    "start_lon": 108.419861,
                    "start_lat": 27.5634289,
                    "end_lon": 108.434967,
                    "end_lat": 27.5697441
                },
                {
                    "id": 655,
                    "start_lon": 108.434967,
                    "start_lat": 27.5697441,
                    "end_lon": 108.456085,
                    "end_lat": 27.574461
                },
                {
                    "id": 656,
                    "start_lon": 108.456085,
                    "start_lat": 27.574461,
                    "end_lon": 108.476257,
                    "end_lat": 27.5858727
                },
                {
                    "id": 657,
                    "start_lon": 108.476257,
                    "start_lat": 27.5858727,
                    "end_lon": 108.495911,
                    "end_lat": 27.59949
                },
                {
                    "id": 658,
                    "start_lon": 108.495911,
                    "start_lat": 27.59949,
                    "end_lon": 108.5099,
                    "end_lat": 27.6045856
                },
                {
                    "id": 659,
                    "start_lon": 108.5099,
                    "start_lat": 27.6045856,
                    "end_lon": 108.526634,
                    "end_lat": 27.6043568
                },
                {
                    "id": 660,
                    "start_lon": 108.526634,
                    "start_lat": 27.6043568,
                    "end_lon": 108.547325,
                    "end_lat": 27.6163731
                },
                {
                    "id": 661,
                    "start_lon": 108.547325,
                    "start_lat": 27.6163731,
                    "end_lon": 108.566635,
                    "end_lat": 27.62687
                },
                {
                    "id": 662,
                    "start_lon": 108.566635,
                    "start_lat": 27.62687,
                    "end_lon": 108.576591,
                    "end_lat": 27.6298332
                },
                {
                    "id": 663,
                    "start_lon": 108.576591,
                    "start_lat": 27.6298332,
                    "end_lon": 108.597878,
                    "end_lat": 27.6396427
                },
                {
                    "id": 664,
                    "start_lon": 108.597878,
                    "start_lat": 27.6396427,
                    "end_lon": 108.612381,
                    "end_lat": 27.64778
                },
                {
                    "id": 665,
                    "start_lon": 108.612381,
                    "start_lat": 27.64778,
                    "end_lon": 108.615387,
                    "end_lat": 27.6525688
                },
                {
                    "id": 666,
                    "start_lon": 108.615387,
                    "start_lat": 27.6525688,
                    "end_lon": 108.618904,
                    "end_lat": 27.6665573
                },
                {
                    "id": 667,
                    "start_lon": 108.618904,
                    "start_lat": 27.6665573,
                    "end_lon": 108.623283,
                    "end_lat": 27.6749935
                },
                {
                    "id": 668,
                    "start_lon": 108.623283,
                    "start_lat": 27.6749935,
                    "end_lon": 108.634186,
                    "end_lat": 27.684267
                },
                {
                    "id": 669,
                    "start_lon": 108.634186,
                    "start_lat": 27.684267,
                    "end_lon": 108.638474,
                    "end_lat": 27.6876869
                },
                {
                    "id": 670,
                    "start_lon": 108.638474,
                    "start_lat": 27.6876869,
                    "end_lon": 108.638733,
                    "end_lat": 27.6934624
                },
                {
                    "id": 671,
                    "start_lon": 108.638733,
                    "start_lat": 27.6934624,
                    "end_lon": 108.644829,
                    "end_lat": 27.690424
                }
            ]
        }
    ],
    "infrast_list": [
        {
            "infrast_id": 300002104,
            "infrast_type_id": 3,
            "unit_type": 3,
            "unit_id": 2104,
            "infrast_name": "安江高速",
            "infrast_pic_url": "/Content/img/waterfire/road.png",
            "infrast_lon": 108.249107,
            "infrast_lat": 27.4943829,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210401,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210401,
            "infrast_name": "石阡隧道右幅",
            "infrast_pic_url": "/Content/img/waterfire/tunnel.png",
            "infrast_lon": 108.306252,
            "infrast_lat": 27.5087433,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210402,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210402,
            "infrast_name": "高岩隧道左幅",
            "infrast_pic_url": "/Content/img/waterfire/tunnel.png",
            "infrast_lon": 107.776215,
            "infrast_lat": 27.1969032,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210403,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210403,
            "infrast_name": "岳家寨隧道",
            "infrast_pic_url": "/Content/img/waterfire/tunnel.png",
            "infrast_lon": 108.6226,
            "infrast_lat": 27.6594563,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210404,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210404,
            "infrast_name": "潘家湾隧道左幅",
            "infrast_pic_url": "/Content/img/waterfire/tunnel.png",
            "infrast_lon": 108.003036,
            "infrast_lat": 27.3358822,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210405,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210405,
            "infrast_name": "黄柏林隧道右幅",
            "infrast_pic_url": "/Content/img/waterfire/tunnel.png",
            "infrast_lon": 107.597916,
            "infrast_lat": 27.13639,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210406,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210406,
            "infrast_name": "大青山隧道",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210407,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210407,
            "infrast_name": "两路口隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210408,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210408,
            "infrast_name": "彭家湾隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210409,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210409,
            "infrast_name": "梁家屯隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210410,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210410,
            "infrast_name": "中坝隧道右幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210411,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210411,
            "infrast_name": "兰家坡隧道右幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210412,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210412,
            "infrast_name": "甘溪1号隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210413,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210413,
            "infrast_name": "甘溪2号隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210414,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210414,
            "infrast_name": "官庄隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210415,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210415,
            "infrast_name": "铜锣洞隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210416,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210416,
            "infrast_name": "杨家关隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210417,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210417,
            "infrast_name": "佛顶山隧道右幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210418,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210418,
            "infrast_name": "泊上隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210419,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210419,
            "infrast_name": "核桃树隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210420,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210420,
            "infrast_name": "大坳坡隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210421,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210421,
            "infrast_name": "凉风坳隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210422,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210422,
            "infrast_name": "大堰隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        },
        {
            "infrast_id": 400210423,
            "infrast_type_id": 4,
            "unit_type": 4,
            "unit_id": 210423,
            "infrast_name": "西坡隧道左幅",
            "infrast_pic_url": null,
            "infrast_lon": 0,
            "infrast_lat": 0,
            "alarm_no": 0
        }
    ]
}

export {
    a,
    chart,
    gis_info
}