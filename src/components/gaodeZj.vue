<template>
  <div>
    <div id="container" tabindex="0"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initGisData: {
        road_id: 101,
        road_name: "新博高速",
        map_info: {
          map_key: "b500805fc94f5a6c33684be251245258",
          map_style:
            "lbs.amap.com/dev/mapstyle/mapshare/7abb3f08c247dc479ad2426bd541f9a9",
          center_lon: 114.271744,
          center_lat: 23.7681751,
          img_width: 1078,
          img_height: 640,
          img_url: "Content/img/map/xb_gis_bj.png",
          zoom_level: 9,
        },
        road_region_list: [
          {
            id: 1,
            region_index: 0,
            start_lon: 114.21804,
            start_lat: 24.0268764,
            end_lon: 114.22036,
            end_lat: 24.0166836,
          },
          {
            id: 2,
            region_index: 0,
            start_lon: 114.22036,
            start_lat: 24.0166836,
            end_lon: 114.213326,
            end_lat: 24.0063343,
          },
          {
            id: 3,
            region_index: 0,
            start_lon: 114.213326,
            start_lat: 24.0063343,
            end_lon: 114.212204,
            end_lat: 23.9898682,
          },
          {
            id: 4,
            region_index: 0,
            start_lon: 114.212204,
            start_lat: 23.9898682,
            end_lon: 114.204224,
            end_lat: 23.9515171,
          },
          {
            id: 5,
            region_index: 0,
            start_lon: 114.204224,
            start_lat: 23.9515171,
            end_lon: 114.21006,
            end_lat: 23.9325333,
          },
          {
            id: 6,
            region_index: 0,
            start_lon: 114.21006,
            start_lat: 23.9325333,
            end_lon: 114.216156,
            end_lat: 23.9242954,
          },
          {
            id: 7,
            region_index: 0,
            start_lon: 114.216156,
            start_lat: 23.9242954,
            end_lon: 114.210831,
            end_lat: 23.9104862,
          },
          {
            id: 8,
            region_index: 0,
            start_lon: 114.210831,
            start_lat: 23.9104862,
            end_lon: 114.211349,
            end_lat: 23.8932228,
          },
          {
            id: 9,
            region_index: 0,
            start_lon: 114.211349,
            start_lat: 23.8932228,
            end_lon: 114.207916,
            end_lat: 23.8736038,
          },
          {
            id: 10,
            region_index: 0,
            start_lon: 114.207916,
            start_lat: 23.8736038,
            end_lon: 114.211861,
            end_lat: 23.8643417,
          },
          {
            id: 11,
            region_index: 0,
            start_lon: 114.211861,
            start_lat: 23.8643417,
            end_lon: 114.22216,
            end_lat: 23.8551579,
          },
          {
            id: 12,
            region_index: 0,
            start_lon: 114.22216,
            start_lat: 23.8551579,
            end_lon: 114.237953,
            end_lat: 23.8476219,
          },
          {
            id: 13,
            region_index: 0,
            start_lon: 114.237953,
            start_lat: 23.8476219,
            end_lon: 114.255463,
            end_lat: 23.8281517,
          },
          {
            id: 14,
            region_index: 0,
            start_lon: 114.255463,
            start_lat: 23.8281517,
            end_lon: 114.262589,
            end_lat: 23.8020821,
          },
          {
            id: 15,
            region_index: 0,
            start_lon: 114.262589,
            start_lat: 23.8020821,
            end_lon: 114.281815,
            end_lat: 23.7862167,
          },
          {
            id: 16,
            region_index: 0,
            start_lon: 114.281815,
            start_lat: 23.7862167,
            end_lon: 114.287735,
            end_lat: 23.7640667,
          },
          {
            id: 17,
            region_index: 0,
            start_lon: 114.287735,
            start_lat: 23.7640667,
            end_lon: 114.298294,
            end_lat: 23.73162,
          },
          {
            id: 18,
            region_index: 0,
            start_lon: 114.298294,
            start_lat: 23.73162,
            end_lon: 114.293831,
            end_lat: 23.7187347,
          },
          {
            id: 19,
            region_index: 0,
            start_lon: 114.293831,
            start_lat: 23.7187347,
            end_lon: 114.296494,
            end_lat: 23.7032528,
          },
          {
            id: 20,
            region_index: 0,
            start_lon: 114.296494,
            start_lat: 23.7032528,
            end_lon: 114.295204,
            end_lat: 23.6920147,
          },
          {
            id: 21,
            region_index: 0,
            start_lon: 114.295204,
            start_lat: 23.6920147,
            end_lon: 114.304047,
            end_lat: 23.6771584,
          },
          {
            id: 22,
            region_index: 0,
            start_lon: 114.304047,
            start_lat: 23.6771584,
            end_lon: 114.3049,
            end_lat: 23.666153,
          },
          {
            id: 23,
            region_index: 0,
            start_lon: 114.3049,
            start_lat: 23.666153,
            end_lon: 114.315979,
            end_lat: 23.6528664,
          },
          {
            id: 24,
            region_index: 0,
            start_lon: 114.315979,
            start_lat: 23.6528664,
            end_lon: 114.301987,
            end_lat: 23.6306934,
          },
          {
            id: 25,
            region_index: 0,
            start_lon: 114.301987,
            start_lat: 23.6306934,
            end_lon: 114.286705,
            end_lat: 23.6221237,
          },
          {
            id: 26,
            region_index: 0,
            start_lon: 114.286705,
            start_lat: 23.6221237,
            end_lon: 114.283707,
            end_lat: 23.6092262,
          },
          {
            id: 27,
            region_index: 0,
            start_lon: 114.283707,
            start_lat: 23.6092262,
            end_lon: 114.285591,
            end_lat: 23.57564,
          },
          {
            id: 28,
            region_index: 0,
            start_lon: 114.285591,
            start_lat: 23.57564,
            end_lon: 114.299751,
            end_lat: 23.5366154,
          },
          {
            id: 29,
            region_index: 0,
            start_lon: 114.299751,
            start_lat: 23.5366154,
            end_lon: 114.301559,
            end_lat: 23.528038,
          },
          {
            id: 30,
            region_index: 0,
            start_lon: 114.301559,
            start_lat: 23.528038,
            end_lon: 114.308594,
            end_lat: 23.517807,
          },
          {
            id: 31,
            region_index: 0,
            start_lon: 114.308594,
            start_lat: 23.517807,
            end_lon: 114.30851,
            end_lat: 23.4863224,
          },
          {
            id: 32,
            region_index: 0,
            start_lon: 114.30851,
            start_lat: 23.4863224,
            end_lon: 114.298126,
            end_lat: 23.470499,
          },
          {
            id: 33,
            region_index: 0,
            start_lon: 114.298126,
            start_lat: 23.470499,
            end_lon: 114.298035,
            end_lat: 23.4566422,
          },
          {
            id: 34,
            region_index: 0,
            start_lon: 114.298035,
            start_lat: 23.4566422,
            end_lon: 114.280182,
            end_lat: 23.4323883,
          },
          {
            id: 35,
            region_index: 0,
            start_lon: 114.280182,
            start_lat: 23.4323883,
            end_lon: 114.278214,
            end_lat: 23.4180546,
          },
          {
            id: 36,
            region_index: 0,
            start_lon: 114.278214,
            start_lat: 23.4180546,
            end_lon: 114.279243,
            end_lat: 23.40805,
          },
          {
            id: 37,
            region_index: 0,
            start_lon: 114.279243,
            start_lat: 23.40805,
            end_lon: 114.278984,
            end_lat: 23.3950539,
          },
          {
            id: 38,
            region_index: 0,
            start_lon: 114.278984,
            start_lat: 23.3950539,
            end_lon: 114.289795,
            end_lat: 23.3813457,
          },
          {
            id: 39,
            region_index: 0,
            start_lon: 114.289795,
            start_lat: 23.3813457,
            end_lon: 114.28997,
            end_lat: 23.3216152,
          },
          {
            id: 40,
            region_index: 0,
            start_lon: 114.28997,
            start_lat: 23.3216152,
            end_lon: 114.282585,
            end_lat: 23.3123932,
          },
          {
            id: 41,
            region_index: 0,
            start_lon: 114.282585,
            start_lat: 23.3123932,
            end_lon: 114.266106,
            end_lat: 23.2826748,
          },
          {
            id: 42,
            region_index: 0,
            start_lon: 114.266106,
            start_lat: 23.2826748,
            end_lon: 114.238815,
            end_lat: 23.26383,
          },
          {
            id: 43,
            region_index: 0,
            start_lon: 114.238815,
            start_lat: 23.26383,
            end_lon: 114.223282,
            end_lat: 23.238121,
          },
          {
            id: 44,
            region_index: 0,
            start_lon: 114.223282,
            start_lat: 23.238121,
            end_lon: 114.212296,
            end_lat: 23.2281055,
          },
          {
            id: 45,
            region_index: 0,
            start_lon: 114.212296,
            start_lat: 23.2281055,
            end_lon: 114.207657,
            end_lat: 23.2004166,
          },
          {
            id: 46,
            region_index: 0,
            start_lon: 114.207657,
            start_lat: 23.2004166,
            end_lon: 114.193413,
            end_lat: 23.159626,
          },
          {
            id: 47,
            region_index: 0,
            start_lon: 114.193413,
            start_lat: 23.159626,
            end_lon: 114.198814,
            end_lat: 23.1589146,
          },
          {
            id: 48,
            region_index: 0,
            start_lon: 114.198814,
            start_lat: 23.1589146,
            end_lon: 114.211777,
            end_lat: 23.1913452,
          },
          {
            id: 49,
            region_index: 0,
            start_lon: 114.211777,
            start_lat: 23.1913452,
            end_lon: 114.215553,
            end_lat: 23.2227421,
          },
          {
            id: 50,
            region_index: 0,
            start_lon: 114.215553,
            start_lat: 23.2227421,
            end_lon: 114.2383,
            end_lat: 23.2491627,
          },
          {
            id: 51,
            region_index: 0,
            start_lon: 114.2383,
            start_lat: 23.2491627,
            end_lon: 114.288681,
            end_lat: 23.30262,
          },
          {
            id: 52,
            region_index: 0,
            start_lon: 114.288681,
            start_lat: 23.30262,
            end_lon: 114.295547,
            end_lat: 23.32863,
          },
          {
            id: 53,
            region_index: 0,
            start_lon: 114.295547,
            start_lat: 23.32863,
            end_lon: 114.294777,
            end_lat: 23.3808746,
          },
          {
            id: 54,
            region_index: 0,
            start_lon: 114.294777,
            start_lat: 23.3808746,
            end_lon: 114.282585,
            end_lat: 23.39592,
          },
          {
            id: 55,
            region_index: 0,
            start_lon: 114.282585,
            start_lat: 23.39592,
            end_lon: 114.283707,
            end_lat: 23.4175816,
          },
          {
            id: 56,
            region_index: 0,
            start_lon: 114.283707,
            start_lat: 23.4175816,
            end_lon: 114.284561,
            end_lat: 23.4316,
          },
          {
            id: 57,
            region_index: 0,
            start_lon: 114.284561,
            start_lat: 23.4316,
            end_lon: 114.301643,
            end_lat: 23.4557743,
          },
          {
            id: 58,
            region_index: 0,
            start_lon: 114.301643,
            start_lat: 23.4557743,
            end_lon: 114.302673,
            end_lat: 23.4712067,
          },
          {
            id: 59,
            region_index: 0,
            start_lon: 114.302673,
            start_lat: 23.4712067,
            end_lon: 114.312286,
            end_lat: 23.4874249,
          },
          {
            id: 60,
            region_index: 0,
            start_lon: 114.312286,
            start_lat: 23.4874249,
            end_lon: 114.311424,
            end_lat: 23.5181217,
          },
          {
            id: 61,
            region_index: 0,
            start_lon: 114.311424,
            start_lat: 23.5181217,
            end_lon: 114.304131,
            end_lat: 23.5310268,
          },
          {
            id: 62,
            region_index: 0,
            start_lon: 114.304131,
            start_lat: 23.5310268,
            end_lon: 114.297523,
            end_lat: 23.5658054,
          },
          {
            id: 63,
            region_index: 0,
            start_lon: 114.297523,
            start_lat: 23.5658054,
            end_lon: 114.289108,
            end_lat: 23.5771332,
          },
          {
            id: 64,
            region_index: 0,
            start_lon: 114.289108,
            start_lat: 23.5771332,
            end_lon: 114.292374,
            end_lat: 23.6198425,
          },
          {
            id: 65,
            region_index: 0,
            start_lon: 114.292374,
            start_lat: 23.6198425,
            end_lon: 114.31881,
            end_lat: 23.6421738,
          },
          {
            id: 66,
            region_index: 0,
            start_lon: 114.31881,
            start_lat: 23.6421738,
            end_lon: 114.317863,
            end_lat: 23.6596279,
          },
          {
            id: 67,
            region_index: 0,
            start_lon: 114.317863,
            start_lat: 23.6596279,
            end_lon: 114.30439,
            end_lat: 23.6841545,
          },
          {
            id: 68,
            region_index: 0,
            start_lon: 114.30439,
            start_lat: 23.6841545,
            end_lon: 114.298637,
            end_lat: 23.6947651,
          },
          {
            id: 69,
            region_index: 0,
            start_lon: 114.298637,
            start_lat: 23.6947651,
            end_lon: 114.299324,
            end_lat: 23.71842,
          },
          {
            id: 70,
            region_index: 0,
            start_lon: 114.299324,
            start_lat: 23.71842,
            end_lon: 114.300613,
            end_lat: 23.74215,
          },
          {
            id: 71,
            region_index: 0,
            start_lon: 114.300613,
            start_lat: 23.74215,
            end_lon: 114.284737,
            end_lat: 23.7859821,
          },
          {
            id: 72,
            region_index: 0,
            start_lon: 114.284737,
            start_lat: 23.7859821,
            end_lon: 114.273148,
            end_lat: 23.8022385,
          },
          {
            id: 73,
            region_index: 0,
            start_lon: 114.273148,
            start_lat: 23.8022385,
            end_lon: 114.265251,
            end_lat: 23.8056946,
          },
          {
            id: 74,
            region_index: 0,
            start_lon: 114.265251,
            start_lat: 23.8056946,
            end_lon: 114.258812,
            end_lat: 23.8322334,
          },
          {
            id: 75,
            region_index: 0,
            start_lon: 114.258812,
            start_lat: 23.8322334,
            end_lon: 114.212036,
            end_lat: 23.8747025,
          },
          {
            id: 76,
            region_index: 0,
            start_lon: 114.212036,
            start_lat: 23.8747025,
            end_lon: 114.220016,
            end_lat: 23.92147,
          },
          {
            id: 77,
            region_index: 0,
            start_lon: 114.220016,
            start_lat: 23.92147,
            end_lon: 114.210579,
            end_lat: 23.9486942,
          },
          {
            id: 78,
            region_index: 0,
            start_lon: 114.210579,
            start_lat: 23.9486942,
            end_lon: 114.218475,
            end_lat: 24.0057869,
          },
          {
            id: 79,
            region_index: 0,
            start_lon: 114.218475,
            start_lat: 24.0057869,
            end_lon: 114.224823,
            end_lat: 24.0159779,
          },
          {
            id: 80,
            region_index: 0,
            start_lon: 114.224823,
            start_lat: 24.0159779,
            end_lon: 114.223106,
            end_lat: 24.0274239,
          },
          {
            id: 81,
            region_index: 0,
            start_lon: 114.223106,
            start_lat: 24.0274239,
            end_lon: 114.218132,
            end_lat: 24.02664,
          },
        ],
        infrast_list: [
          {
            infrast_id: 1011101,
            infrast_type_id: 11,
            infrast_name: "新丰南",
            infrast_pic_url: "/Content/img/map/shouf.png",
            lon: 114.22319,
            lat: 24.0165348,
            pos_x: 462,
            pos_y: 520,
            win_title: "新丰南",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/21B3607C_AE66_4E07_8369_909017A237DB.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/EDAFB034_F13F_40EA_8C56_694AEB0369B8.m3u8",
            win_content:
              "入口车道:3 出口车道:3<br> 入口ETC:1 出口ETC:1<br> 桩号:K378+288<br>",
            gis_show: 0,
          },
          {
            infrast_id: 1011102,
            infrast_type_id: 11,
            infrast_name: "蓝田",
            infrast_pic_url: "/Content/img/map/shouf.png",
            lon: 114.23616,
            lat: 23.8530712,
            pos_x: 454,
            pos_y: 400,
            win_title: "蓝田",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/0A4C9108_E6C3_4782_A1F1_A63E116F4DC3.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/A68C23DA_7455_435D_921C_63F47F85EE18.m3u8",
            win_content:
              "入口车道:3 出口车道:4<br> 入口ETC:1 出口ETC:1<br> 桩号:K398+681<br>地点:<br>",
            gis_show: 0,
          },
          {
            infrast_id: 1011103,
            infrast_type_id: 11,
            infrast_name: "龙田",
            infrast_pic_url: "/Content/img/map/shouf.png",
            lon: 114.28405,
            lat: 23.7681274,
            pos_x: 493,
            pos_y: 345,
            win_title: "龙门北",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/A4E7A418_08B8_461F_9C99_FD82A8A8C4E7.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/570430E2_4B81_4635_BA06_2354648F380F.m3u8",
            win_content:
              "入口车道:4 出口车道:8<br> 入口ETC:1 出口ETC:2<br> 桩号:K409+573<br>地点:<br>",
            gis_show: 0,
          },
          {
            infrast_id: 1011104,
            infrast_type_id: 11,
            infrast_name: "龙门",
            infrast_pic_url: "/Content/img/map/shouf.png",
            lon: 114.310173,
            lat: 23.6704979,
            pos_x: 517,
            pos_y: 300,
            win_title: "龙门南",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/6E25ADB4_8B48_4F2D_9927_7919ED396D4F.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/62355488_19BF_4D93_88C0_84DB92E10AC3.m3u8",
            win_content:
              "入口车道:4 出口车道:8<br> 入口ETC:1 出口ETC:2<br> 桩号:K421+275<br>地点:<br>",
            gis_show: 0,
          },
          {
            infrast_id: 1011105,
            infrast_type_id: 11,
            infrast_name: "龙江",
            infrast_pic_url: "/Content/img/map/shouf.png",
            lon: 114.300842,
            lat: 23.6258678,
            pos_x: 517,
            pos_y: 277,
            win_title: "平陵",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/995F689F_A9EF_473B_9B67_91C94F7A242D.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/3879674C_D1B9_4ABC_8720_494A2588CB36.m3u8",
            win_content:
              "入口车道:3 出口车道:4<br> 入口ETC:1 出口ETC:1<br> 桩号:K426+923<br>地点:<br>",
            gis_show: 0,
          },
          {
            infrast_id: 1011106,
            infrast_type_id: 11,
            infrast_name: "官山",
            infrast_pic_url: "/Content/img/map/shouf.png",
            lon: 114.311295,
            lat: 23.4989967,
            pos_x: 518,
            pos_y: 252,
            win_title: "官山",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/A79F2FC7_C380_4873_9436_49A9A9B137D0.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/821F6E42_3ACD_4927_9FF8_23F882B7E9A7.m3u8",
            win_content:
              "入口车道:3 出口车道:4<br> 入口ETC:1 出口ETC:1<br> 桩号:K440+730<br>地点:<br>",
            gis_show: 0,
          },
          {
            infrast_id: 1011107,
            infrast_type_id: 11,
            infrast_name: "平安",
            infrast_pic_url: "/Content/img/map/shouf.png",
            lon: 114.296356,
            lat: 23.34984,
            pos_x: 526,
            pos_y: 232,
            win_title: "平安",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/77698DAB_2655_4C80_A43C_1FA46F73C674.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/52B7F5A4_F4E8_49AB_9CE4_31C94627BB07.m3u8",
            win_content:
              "入口车道:3 出口车道:5<br> 入口ETC:1 出口ETC:1<br> 桩号:K458+861<br>地点:<br>",
            gis_show: 0,
          },
          {
            infrast_id: 1011108,
            infrast_type_id: 11,
            infrast_name: "湖镇",
            infrast_pic_url: "/Content/img/map/shouf.png",
            lon: 114.22699,
            lat: 23.2486935,
            pos_x: 512,
            pos_y: 167,
            win_title: "湖镇",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/C94E1534_34F3_4ED7_A654_97D88AF20F4C.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/985E3770_C126_4267_9276_FF5AF61B04CC.m3u8",
            win_content:
              "入口车道:3 出口车道:5<br> 入口ETC:1 出口ETC:1<br> 桩号:K472+932<br>地点:<br>",
            gis_show: 0,
          },
          {
            infrast_id: 1011301,
            infrast_type_id: 13,
            infrast_name: "九连山隧道",
            infrast_pic_url: "/Content/img/map/shuid.png",
            lon: 114.212631,
            lat: 23.9880924,
            pos_x: 458,
            pos_y: 495,
            win_title: "九连山隧道",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/14F20873_B11B_49CC_9C55_0B822B914ACF.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/AA219D77_0BBA_478E_9A3A_193934821831.m3u8",
            win_content:
              "左洞长度:5450右洞长度:5510<br> 限高:5 限速:100 双线车道:6<br>山名: 地点:新丰<br>",
            gis_show: 0,
          },
          {
            infrast_id: 1011302,
            infrast_type_id: 13,
            infrast_name: "平安隧道",
            infrast_pic_url: "/Content/img/map/shuid.png",
            lon: 114.2925,
            lat: 23.4467659,
            pos_x: 517,
            pos_y: 202,
            win_title: "平安隧道",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/A71EEBD2_0AC0_440E_833F_07DC5670441D.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/C0BB8431_15BA_4190_AF2A_8917C0469ED9.m3u8",
            win_content:
              "左洞长度:1446右洞长度:1431<br> 限高:5 限速:100 双线车道:6<br>山名: 地点:新丰<br>",
            gis_show: 0,
          },
          {
            infrast_id: 1011303,
            infrast_type_id: 13,
            infrast_name: "竹山隧道",
            infrast_pic_url: "/Content/img/map/shuid.png",
            lon: 114.210922,
            lat: 23.2005329,
            pos_x: 517,
            pos_y: 146,
            win_title: "竹山隧道",
            win_stream_mod: 1,
            win_pic_url:
              "http://183.63.31.130:6689/dynamic/snapshot/2020/08/19/8DF7DC35_BA5E_453D_B8DF_1B38A1BFAE34.png",
            win_video_url:
              "http://183.63.31.130:6689/hls/839D15C6_6875_4845_969B_FCD32431765A.m3u8",
            win_content:
              "左洞长度:1342右洞长度:1360<br> 限高:5 限速:100 双线车道:6<br>山名: 地点:新丰<br>",
            gis_show: 0,
          },
        ],
        dev_list: null,
        ebox_list: null,
        line_list: null,
      },
    };
  },
  mounted() {
    this.initGIS(this.initGisData);
    this.$nextTick(() => {
      this.initMap();
    });
  },
  methods: {
    initGIS(data) {
      let path = [];
      this.zoom = data.map_info.zoom_level;
      this.center = [data.map_info.center_lon, data.map_info.center_lat];
      let markers = [];
      data.infrast_list.forEach((v, i) => {
        markers.push({
          position: [v.lon, v.lat],
          content: `<div class="marker" @click="handler(${i})"><img src="${"http://idos.yuxianginfo.net:3678"}${
            v.infrast_pic_url
          }"/>${v.infrast_name}</div>`,
          extData: v,
          offset: new AMap.Pixel(-16, -37),
        });
      });
      path.push([
        data.road_region_list[0].start_lon,
        data.road_region_list[0].start_lat,
      ]);
      data.road_region_list.forEach((v, i) => {
        path.push([v.end_lon, v.end_lat]);
      });
      this.markers = markers;
      this.polyline = path;
    },
    initMap() {
      let map = new AMap.Map("container", {
        zoom: this.zoom,
        center: this.center,
        resizeEnable: true,
        // map_style: this.map_style,

        rotateEnable: true,
        pitchEnable: true,
        pitch: 60,
        rotation: -45,
        viewMode: "3D", //开启3D视图,默认为关闭
        buildingAnimation: true, //楼块出现是否带动画
        expandZoomRange: true,
      });
      // map.setMapStyle("amap://styles/darkblue");
      let scale = new AMap.Scale({});
      let toolBar = new AMap.ToolBar({});
      let overView = new AMap.OverView({});
      map.addControl(scale);
      map.addControl(toolBar);
      map.addControl(overView);
      new AMap.Polygon({
        map: map,
        path: this.polyline,
        strokeColor: "#09193a",
        fillColor: "#09193a50",
      });
      this.markers.forEach((v) => {
        let that = this;
        let marker = new AMap.Marker(v);
        marker.on("click", function () {
          let res = this.getExtData();
          let html = document.createElement("div");
          html.className = "info-middle";
          let div1 = document.createElement("div");
          div1.className = "media-box";
          div1.innerHTML = "^_^";
          let div2 = document.createElement("div");
          //   div2.innerHTML = res.win_content;
          div2.innerHTML =
            "可以查看隧道的基本信息、隧道的水消防监测的内容，含仪表数量、一个水压、一个水位的实时监测情况。";
          html.appendChild(div1);
          html.appendChild(div2);
          //   if (res.win_stream_mod == 1) {
          //   } else if (res.win_stream_mod == 2) {
          //     let img = document.createElement("img");
          //     img.src = res.win_pic_url;
          //     div1.appendChild(img);
          //   }
          let infowidow = new AMap.InfoWindow({
            isCustom: true, //使用自定义窗体
            offset: new AMap.Pixel(16, -45),
          });
          infowidow.setContent(
            that.createInfoWindow(
              res.win_title + "：水消防信息",
              html,
              infowidow
            )
          );
          AMap.event.addListener(infowidow, "open", (e) => {
            console.log(1111);
          });
          AMap.event.addListener(infowidow, "change", (e) => {
            console.log("属性发生变化时", e);
          });
          AMap.event.addListener(infowidow, "close", (e) => {
            console.log("窗口关闭", e);
            if (res.hls) {
              res.hls.stopLoad();
              res.hls.destroy();
            }
          });
          infowidow.open(this.getMap(), this.getPosition());
        });
        map.add(marker);
      });
    },
    //构建自定义信息窗体
    createInfoWindow(title, content, context) {
      var info = document.createElement("div");
      info.className = "custom-info input-card content-window-card";
      //可以通过下面的方式修改自定义窗体的宽高
      //info.style.width = "400px";
      // 定义顶部标题
      var top = document.createElement("div");
      var titleD = document.createElement("div");
      var closeX = document.createElement("div");
      top.className = "info-top";
      titleD.innerHTML = title;
      closeX.className = "el-icon-close";
      closeX.onclick = () => {
        context.close();
      };

      top.appendChild(titleD);
      top.appendChild(closeX);
      info.appendChild(top);

      // 定义中部内容
      var middle = document.createElement("div");
      middle.className = "info-middle";
      middle.style.backgroundColor = "#fff";
      middle.appendChild(content);
      info.appendChild(middle);

      // 定义底部内容
      var bottom = document.createElement("div");
      bottom.className = "info-bottom";
      bottom.style.position = "relative";
      bottom.style.top = "0px";
      bottom.style.margin = "0 auto";
      var sharp = document.createElement("img");
      sharp.src = "https://webapi.amap.com/images/sharp.png";
      bottom.appendChild(sharp);
      info.appendChild(bottom);
      return info;
    },
  },
};
</script>

<style>
html,
body,
#container {
  height: 80vh;
  width: 100vw;
}

.content-window-card {
  position: relative;
  box-shadow: none;
  bottom: 0;
  left: 0;
  width: auto;
  padding: 0;
}

.content-window-card p {
  height: 2rem;
}

.custom-info {
  border: solid 1px white !important;
  border-radius: 5px 5px 0 0;
}

div.info-top {
  position: relative;
  background: none repeat scroll 0 0 #f9f9f9;
  border-bottom: 1px solid #ccc;
  border-radius: 3px 3px 0 0;
}

div.info-top div {
  display: inline-block;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  line-height: 31px;
  padding: 0 10px;
}

div.info-top img {
  position: absolute;
  top: 10px;
  right: 10px;
  transition-duration: 0.25s;
}

div.info-top img:hover {
  box-shadow: 0px 0px 5px #000;
}

div.info-middle {
  font-size: 12px;
  padding: 10px 6px;
  line-height: 20px;
}

div.info-bottom {
  height: 0px;
  width: 100%;
  clear: both;
  text-align: center;
}

div.info-bottom img {
  position: relative;
  z-index: 104;
}

span {
  margin-left: 5px;
  font-size: 11px;
}

.info-middle img {
  float: left;
  margin-right: 6px;
}

.marker {
  background-color: rgba(3, 56, 83, 1);
}
.marker::after {
  border-top: 8px solid rgba(3, 56, 83, 1);
}
</style>