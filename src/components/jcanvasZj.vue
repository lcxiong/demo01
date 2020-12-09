<template>
  <div class="simculate-box">
    <div ref="container" class="container">
      <canvas id="jcanvas" :width="background.width" :height="background.height"></canvas>
      
    </div>
    <div v-for="(item,index) in addList" :key="index" @click="addDevice(item)" class="add-device">
        选择
    </div>
  </div>
</template>

<script>
export default {
  name: "jcanvasZj",
  data() {
    return {
        
    addList:[
        {
    "dev_id": 101021001,
    "dev_name": "右洞快车道车道灯1",
    "status_str": null,
    "updatetime": "0001-01-01T00:00:00",
    "cat_id": 0,
    "dev_type_id": 21,
    "stake_str": "K842+375",
    "height": 56,
    "width": 56
}
    ],
      devList:[
    {
        "id": 101021001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 378,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 416,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 416,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 1,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021002,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 378,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 416,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021002,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 416,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 2,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021003,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 378,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 416,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021003,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 416,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021003,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 3,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021004,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 892,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 930,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021004,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 930,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021004,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 4,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021005,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 892,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 930,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021005,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 930,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021005,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 5,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021006,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 892,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 930,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021006,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 930,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021006,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 6,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021007,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 1965,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2003,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021007,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2003,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021007,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 7,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021008,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 1965,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2003,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021008,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2003,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021008,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 8,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021009,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 1965,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2003,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021009,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2003,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021009,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 9,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021010,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3030,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3068,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021010,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3068,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021010,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 10,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021011,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3030,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3068,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021011,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3068,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021011,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 11,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021012,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3030,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3068,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021012,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3068,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021012,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 12,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021013,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4072,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4110,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021013,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4110,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021013,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 13,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021014,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4072,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4110,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021014,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4110,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021014,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 14,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021015,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4072,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4110,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021015,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4110,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021015,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 15,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021016,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 5182,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5220,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021016,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5220,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021016,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 16,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021017,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 5182,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5220,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021017,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5220,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021017,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 17,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021018,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 5182,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5220,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021018,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5220,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021018,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 18,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021019,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6277,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6315,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021019,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6315,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021019,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 19,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021020,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6277,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6315,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021020,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6315,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021020,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 20,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021021,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6277,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6315,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021021,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6315,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021021,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 21,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021022,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7252,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7290,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021022,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7290,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021022,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 22,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021023,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7252,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7290,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021023,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7290,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021023,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 23,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021024,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7252,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7290,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021024,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7290,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021024,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 24,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021025,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8152,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8190,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021025,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8190,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021025,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 25,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021026,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8152,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8190,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021026,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8190,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021026,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 26,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021027,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8152,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8190,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021027,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8190,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021027,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 27,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021028,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8617,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8655,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021028,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8655,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021028,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 28,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021029,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8617,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8655,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021029,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8655,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021029,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 29,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021030,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8617,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8655,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021030,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8655,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021030,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 30,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021031,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8592,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8630,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021031,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8630,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021031,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 31,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021032,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8592,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8630,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021032,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8630,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021032,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 32,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021033,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8592,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8630,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021033,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8630,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021033,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 33,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021034,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8160,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8198,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021034,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8198,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021034,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 34,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021035,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8160,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8198,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021035,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8198,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021035,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 35,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021036,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 8160,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8198,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021036,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8198,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021036,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 36,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021037,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7297,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7335,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021037,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7335,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021037,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 37,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021038,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7297,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7335,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021038,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7335,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021038,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 38,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021039,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7297,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7335,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021039,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7335,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021039,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 39,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021040,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6270,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6308,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021040,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6308,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021040,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 40,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021041,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6270,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6308,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021041,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6308,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021041,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 41,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021042,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6270,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6308,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021042,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6308,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021042,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 42,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021043,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4072,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4110,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021043,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4110,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021043,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 43,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021044,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4072,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4110,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021044,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4110,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021044,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 44,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021045,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4072,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4110,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021045,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4110,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021045,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 45,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021046,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4140,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4178,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021046,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4178,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021046,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 46,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021047,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4140,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4178,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021047,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4178,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021047,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 47,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021048,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4140,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4178,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021048,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4178,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021048,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 48,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021049,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3082,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3120,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021049,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3120,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021049,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 49,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021050,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3082,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3120,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021050,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3120,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021050,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 50,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021051,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3082,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3120,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021051,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3120,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021051,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 51,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021052,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 2025,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2063,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021052,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2063,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021052,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 52,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021053,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 2025,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2063,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021053,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2063,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021053,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 53,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021054,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 2025,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2063,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021054,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2063,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021054,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 54,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021055,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 967,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1005,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021055,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1005,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021055,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 55,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021056,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 967,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1005,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021056,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1005,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021056,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 56,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021057,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 967,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1005,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021057,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1005,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021057,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 57,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021058,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 442,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 480,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021058,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 480,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021058,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 58,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021059,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 442,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 480,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021059,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 480,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021059,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 59,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101021060,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 442,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 480,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101021060,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 480,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101021060,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 60,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 1438,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1476,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1476,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 61,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022002,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 1438,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1476,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022002,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1476,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 62,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022003,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 1438,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1476,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022003,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1476,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022003,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 63,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022004,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 2490,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2528,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022004,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2528,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022004,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 64,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022005,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 2490,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2528,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022005,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2528,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022005,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 65,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022006,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 2490,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2528,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022006,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2528,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022006,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 66,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022007,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3555,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3593,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022007,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3593,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022007,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 67,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022008,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3555,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3593,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022008,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3593,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022008,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 68,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022009,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3555,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3593,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022009,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3593,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022009,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 69,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022010,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4612,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4650,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022010,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4650,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022010,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 70,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022011,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4612,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4650,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022011,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4650,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022011,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 71,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022012,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4612,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4650,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022012,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4650,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022012,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 72,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022013,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 5752,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5790,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022013,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5790,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022013,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 73,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022014,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 5752,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5790,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022014,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5790,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022014,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 74,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022015,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 5752,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5790,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022015,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5790,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022015,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 75,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022016,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6735,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6773,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022016,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6773,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022016,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 76,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022017,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6735,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6773,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022017,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6773,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022017,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 77,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022018,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6735,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6773,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022018,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6773,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022018,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 78,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022019,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7785,
        "y": 620,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7823,
            "y": 640.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022019,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7823,
                "y": 640.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022019,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 79,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022020,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7785,
        "y": 720,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7823,
            "y": 740.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022020,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7823,
                "y": 740.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022020,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 80,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022021,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7785,
        "y": 820,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7823,
            "y": 840.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022021,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7823,
                "y": 840.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022021,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 81,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022022,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7807,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7845,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022022,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7845,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022022,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 82,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022023,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7807,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7845,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022023,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7845,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022023,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 83,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022024,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 7807,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7845,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022024,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7845,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022024,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 84,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022025,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6757,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6795,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022025,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6795,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022025,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 85,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022026,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6757,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6795,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022026,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6795,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022026,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 86,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022027,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 6757,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6795,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022027,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6795,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022027,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 87,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022028,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 5782,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5820,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022028,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5820,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022028,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 88,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022029,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 5782,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5820,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022029,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5820,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022029,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 89,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022030,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 5782,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5820,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022030,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5820,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022030,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 90,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022031,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4657,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4695,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022031,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4695,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022031,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 91,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022032,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4657,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4695,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022032,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4695,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022032,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 92,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022033,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 4657,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4695,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022033,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4695,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022033,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 93,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022034,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3607,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3645,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022034,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3645,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022034,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 94,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022035,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3607,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3645,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022035,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3645,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022035,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 95,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022036,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 3607,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3645,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022036,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3645,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022036,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 96,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022037,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 2557,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2595,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022037,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2595,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022037,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 97,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022038,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 2557,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2595,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022038,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2595,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022038,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 98,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022039,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 2557,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2595,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022039,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2595,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022039,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 99,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022040,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 1507,
        "y": 421,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1545,
            "y": 441.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022040,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1545,
                "y": 441.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022040,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 100,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022041,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 1507,
        "y": 321,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1545,
            "y": 341.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022041,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1545,
                "y": 341.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022041,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 101,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101022042,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/lane_fore.png",
        "x": 1507,
        "y": 221,
        "width": 76,
        "height": 76,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1545,
            "y": 241.5,
            "width": 76,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101022042,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1545,
                "y": 241.5,
                "width": 76,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101022042,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 102,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101024001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/traffic_green.png",
        "x": 240,
        "y": 960,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 260,
            "y": 1005,
            "width": 40,
            "height": 90,
            "visible": true,
            "data": {
                "id": 101024001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 260,
                "y": 1005,
                "width": 40,
                "height": 90,
                "visible": true,
                "data": {
                    "id": 101024001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 103,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101024002,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/traffic_green.png",
        "x": 8950,
        "y": 90,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8970,
            "y": 135,
            "width": 40,
            "height": 90,
            "visible": true,
            "data": {
                "id": 101024002,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8970,
                "y": 135,
                "width": 40,
                "height": 90,
                "visible": true,
                "data": {
                    "id": 101024002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 104,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 757,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 777.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 777.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 105,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025003,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 757,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 777.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025003,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 777.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025003,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 106,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025004,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 997,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1017.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025004,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1017.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025004,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 107,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025005,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 997,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1017.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025005,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1017.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025005,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 108,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025006,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 997,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1017.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025006,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1017.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025006,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 109,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025007,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1237,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1257.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025007,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1257.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025007,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 110,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025008,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1237,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1257.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025008,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1257.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025008,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 111,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025009,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1237,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1257.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025009,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1257.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025009,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 112,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025010,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1522,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1542.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025010,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1542.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025010,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 113,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025011,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1522,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1542.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025011,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1542.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025011,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 114,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025012,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1522,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1542.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025012,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1542.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025012,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 115,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025013,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1762,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1782.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025013,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1782.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025013,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 116,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025014,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1762,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1782.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025014,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1782.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025014,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 117,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025015,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1762,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1782.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025015,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1782.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025015,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 118,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025016,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 2032,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2052.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025016,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2052.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025016,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 119,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025017,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 2032,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2052.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025017,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2052.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025017,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 120,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025018,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 2032,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2052.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025018,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2052.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025018,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 121,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025019,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4237,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4257.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025019,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4257.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025019,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 122,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025020,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4237,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4257.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025020,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4257.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025020,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 123,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025021,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4237,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4257.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025021,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4257.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025021,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 124,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025022,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4522,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4542.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025022,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4542.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025022,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 125,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025023,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4522,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4542.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025023,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4542.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025023,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 126,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025024,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4522,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4542.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025024,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4542.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025024,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 127,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025025,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4747,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4767.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025025,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4767.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025025,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 128,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025026,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4747,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4767.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025026,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4767.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025026,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 129,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025027,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4747,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4767.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025027,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4767.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025027,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 130,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025028,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 5002,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5022.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025028,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5022.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025028,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 131,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025029,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 5002,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5022.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025029,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5022.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025029,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 132,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025030,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 5002,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5022.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025030,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5022.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025030,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 133,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025031,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 5257,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5277.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025031,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5277.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025031,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 134,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025032,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 5257,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5277.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025032,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5277.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025032,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 135,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025033,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 5257,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5277.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025033,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5277.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025033,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 136,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025034,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7237,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7257.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025034,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7257.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025034,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 137,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025035,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7237,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7257.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025035,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7257.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025035,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 138,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025036,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7237,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7257.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025036,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7257.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025036,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 139,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025037,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7507,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7527.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025037,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7527.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025037,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 140,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025038,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7507,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7527.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025038,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7527.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025038,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 141,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025039,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7507,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7527.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025039,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7527.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025039,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 142,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025040,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7747,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7767.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025040,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7767.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025040,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 143,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025041,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7747,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7767.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025041,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7767.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025041,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 144,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025042,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7747,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7767.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025042,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7767.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025042,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 145,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025043,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8047,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8067.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025043,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8067.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025043,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 146,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025044,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8047,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8067.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025044,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8067.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025044,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 147,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025045,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8047,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8067.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025045,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8067.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025045,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 148,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025046,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8287,
        "y": 620,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8307.5,
            "y": 640.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025046,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8307.5,
                "y": 640.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025046,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 149,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025047,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8287,
        "y": 720,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8307.5,
            "y": 740.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025047,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8307.5,
                "y": 740.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025047,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 150,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025048,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8287,
        "y": 820,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8307.5,
            "y": 840.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025048,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8307.5,
                "y": 840.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025048,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 151,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025049,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8265,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8285.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025049,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8285.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025049,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 152,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025050,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8265,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8285.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025050,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8285.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025050,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 153,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025051,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8265,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8285.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025051,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8285.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025051,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 154,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025052,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8040,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8060.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025052,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8060.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025052,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 155,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025053,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8040,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8060.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025053,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8060.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025053,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 156,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025054,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 8040,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8060.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025054,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8060.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025054,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 157,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025055,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7815,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7835.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025055,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7835.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025055,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 158,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025056,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7815,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7835.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025056,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7835.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025056,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 159,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025057,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7815,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7835.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025057,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7835.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025057,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 160,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025058,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7515,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7535.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025058,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7535.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025058,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 161,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025059,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7515,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7535.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025059,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7535.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025059,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 162,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025060,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7515,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7535.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025060,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7535.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025060,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 163,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025061,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7275,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7295.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025061,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7295.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025061,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 164,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025062,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7275,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7295.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025062,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7295.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025062,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 165,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025063,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 7275,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7295.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025063,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7295.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025063,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 166,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025064,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 5235,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5255.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025064,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5255.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025064,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 167,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025065,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 5235,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5255.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025065,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5255.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025065,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 168,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025066,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 5235,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5255.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025066,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5255.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025066,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 169,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025067,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4995,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5015.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025067,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5015.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025067,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 170,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025068,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4995,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5015.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025068,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5015.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025068,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 171,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025069,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4995,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5015.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025069,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5015.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025069,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 172,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025070,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4755,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4775.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025070,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4775.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025070,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 173,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025071,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4755,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4775.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025071,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4775.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025071,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 174,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025072,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4755,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4775.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025072,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4775.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025072,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 175,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025073,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4515,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4535.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025073,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4535.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025073,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 176,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025074,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4515,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4535.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025074,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4535.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025074,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 177,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025075,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4515,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4535.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025075,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4535.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025075,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 178,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025076,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4275,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4295.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025076,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4295.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025076,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 179,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025077,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4275,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4295.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025077,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4295.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025077,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 180,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025078,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 4275,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4295.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025078,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4295.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025078,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 181,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025079,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 2175,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2195.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025079,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2195.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025079,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 182,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025080,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 2175,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2195.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025080,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2195.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025080,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 183,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025081,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 2175,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2195.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025081,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2195.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025081,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 184,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025082,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1890,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1910.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025082,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1910.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025082,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 185,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025083,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1890,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1910.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025083,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1910.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025083,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 186,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025084,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1890,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1910.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025084,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1910.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025084,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 187,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025085,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1590,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1610.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025085,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1610.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025085,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 188,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025086,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1590,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1610.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025086,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1610.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025086,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 189,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025087,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1590,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1610.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025087,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1610.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025087,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 190,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025088,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1290,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1310.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025088,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1310.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025088,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 191,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025089,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1290,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1310.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025089,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1310.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025089,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 192,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025090,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1290,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1310.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025090,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1310.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025090,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 193,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025091,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1035,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1055.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025091,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1055.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025091,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 194,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025092,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1035,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1055.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025092,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1055.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025092,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 195,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025093,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 1035,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1055.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025093,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1055.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025093,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 196,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025094,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 795,
        "y": 421,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 815.5,
            "y": 441.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025094,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 815.5,
                "y": 441.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025094,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 197,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025095,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 795,
        "y": 321,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 815.5,
            "y": 341.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025095,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 815.5,
                "y": 341.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025095,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 198,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101025096,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/fan_stop.png",
        "x": 795,
        "y": 221,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 815.5,
            "y": 241.5,
            "width": 41,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101025096,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 815.5,
                "y": 241.5,
                "width": 41,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101025096,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 199,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 1468,
        "y": 550,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1496,
            "y": 570.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1496,
                "y": 570.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 200,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027002,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 2523,
        "y": 550,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2551,
            "y": 570.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027002,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2551,
                "y": 570.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 201,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027003,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 3585,
        "y": 550,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3613,
            "y": 570.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027003,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3613,
                "y": 570.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027003,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 202,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027004,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 4647,
        "y": 550,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4675,
            "y": 570.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027004,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4675,
                "y": 570.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027004,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 203,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027005,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 5784,
        "y": 550,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5812,
            "y": 570.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027005,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5812,
                "y": 570.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027005,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 204,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027006,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 6765,
        "y": 550,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6793,
            "y": 570.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027006,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6793,
                "y": 570.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027006,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 205,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027007,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 7815,
        "y": 550,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7843,
            "y": 570.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027007,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7843,
                "y": 570.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027007,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 206,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027008,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 7777,
        "y": 520,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7805,
            "y": 540.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027008,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7805,
                "y": 540.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027008,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 207,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027009,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 6727,
        "y": 520,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6755,
            "y": 540.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027009,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6755,
                "y": 540.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027009,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 208,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027010,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 5752,
        "y": 520,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 5780,
            "y": 540.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027010,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 5780,
                "y": 540.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027010,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 209,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027011,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 4627,
        "y": 520,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4655,
            "y": 540.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027011,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4655,
                "y": 540.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027011,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 210,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027012,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 3577,
        "y": 520,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3605,
            "y": 540.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027012,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3605,
                "y": 540.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027012,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 211,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027013,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 2527,
        "y": 520,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 2555,
            "y": 540.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027013,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 2555,
                "y": 540.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027013,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 212,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101027014,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/door_open.png",
        "x": 1477,
        "y": 520,
        "width": 56,
        "height": 56,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1505,
            "y": 540.5,
            "width": 56,
            "height": 41,
            "visible": true,
            "data": {
                "id": 101027014,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1505,
                "y": 540.5,
                "width": 56,
                "height": 41,
                "visible": true,
                "data": {
                    "id": 101027014,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 213,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101028001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/pump_run.png",
        "x": 225,
        "y": 500,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 245.5,
            "y": 538,
            "width": 41,
            "height": 76,
            "visible": true,
            "data": {
                "id": 101028001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 245.5,
                "y": 538,
                "width": 41,
                "height": 76,
                "visible": true,
                "data": {
                    "id": 101028001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 214,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101028002,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/pump_run.png",
        "x": 345,
        "y": 500,
        "width": 41,
        "height": 41,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 365.5,
            "y": 538,
            "width": 41,
            "height": 76,
            "visible": true,
            "data": {
                "id": 101028002,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 365.5,
                "y": 538,
                "width": 41,
                "height": 76,
                "visible": true,
                "data": {
                    "id": 101028002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 215,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 300,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 315,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 315,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 216,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051002,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 345,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 360,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051002,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 360,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 217,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051003,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 390,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 405,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051003,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 405,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051003,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 218,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051004,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 435,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 450,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051004,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 450,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051004,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 219,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051005,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 480,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 495,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051005,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 495,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051005,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 220,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051006,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 345,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 360,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051006,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 360,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051006,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 221,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051007,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 390,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 405,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051007,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 405,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051007,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 222,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051008,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 435,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 450,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051008,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 450,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051008,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 223,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051009,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 480,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 495,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051009,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 495,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051009,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 224,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051010,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 525,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 540,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051010,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 540,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051010,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 225,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051011,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 8700,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8715,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051011,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8715,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051011,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 226,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051012,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 8655,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8670,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051012,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8670,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051012,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 227,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051013,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 8610,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8625,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051013,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8625,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051013,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 228,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051014,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 8565,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8580,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051014,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8580,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051014,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 229,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051015,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 8520,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8535,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051015,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8535,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051015,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 230,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051016,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 8655,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8670,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051016,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8670,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051016,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 231,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051017,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 8610,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8625,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051017,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8625,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051017,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 232,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051018,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 8565,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8580,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051018,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8580,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051018,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 233,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051019,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 8520,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8535,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051019,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8535,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051019,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 234,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051020,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 8475,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8490,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051020,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8490,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051020,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 235,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051021,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 6000,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6015,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051021,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6015,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051021,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 236,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051022,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 6045,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6060,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051022,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6060,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051022,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 237,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051023,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 6000,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6015,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051023,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6015,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051023,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 238,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051024,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 6045,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 6060,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051024,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 6060,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051024,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 239,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051025,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 3000,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3015,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051025,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3015,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051025,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 240,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051026,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 3045,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3060,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051026,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3060,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051026,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 241,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051027,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 3000,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3015,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051027,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3015,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051027,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 242,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101051028,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/light_off.png",
        "x": 3045,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3060,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101051028,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3060,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101051028,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 243,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101101001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/luminance_normal.png",
        "x": 390,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 405,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101101001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 405,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101101001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 244,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101101002,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/luminance_normal.png",
        "x": 127,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 142,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101101002,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 142,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101101002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 245,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101101003,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/luminance_normal.png",
        "x": 8580,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8595,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101101003,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8595,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101101003,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 246,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101101004,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/luminance_normal.png",
        "x": 8842,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8857,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101101004,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8857,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101101004,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 247,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101102001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/covi_err.png",
        "x": 1325,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1340,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101102001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1340,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101102001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 248,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101102002,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/covi_err.png",
        "x": 3577,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3592,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101102002,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3592,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101102002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 249,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101102003,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/covi_err.png",
        "x": 3405,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3420,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101102003,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3420,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101102003,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 250,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101102004,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/covi_err.png",
        "x": 8415,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8430,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101102004,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8430,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101102004,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 251,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101102005,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/covi_err.png",
        "x": 7935,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7950,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101102005,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7950,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101102005,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 252,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101102006,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/covi_err.png",
        "x": 4682,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4697,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101102006,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4697,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101102006,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 253,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101102007,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/covi_err.png",
        "x": 3795,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3810,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101102007,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3810,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101102007,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 254,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101102008,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/covi_err.png",
        "x": 659,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 674,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101102008,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 674,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101102008,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 255,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101103001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/wind_err.png",
        "x": 1392,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 1407,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101103001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 1407,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101103001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 256,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101103002,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/wind_err.png",
        "x": 3645,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3660,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101103002,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3660,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101103002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 257,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101103003,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/wind_err.png",
        "x": 4912,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4927,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101103003,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4927,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101103003,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 258,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101103004,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/wind_err.png",
        "x": 8482,
        "y": 885,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 8497,
            "y": 900,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101103004,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 8497,
                "y": 900,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101103004,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 259,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101103005,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/wind_err.png",
        "x": 7867,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 7882,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101103005,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 7882,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101103005,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 260,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101103006,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/wind_err.png",
        "x": 4615,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 4630,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101103006,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 4630,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101103006,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 261,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101103007,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/wind_err.png",
        "x": 3727,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 3742,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101103007,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 3742,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101103007,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 262,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101103008,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/wind_err.png",
        "x": 585,
        "y": 160,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 600,
            "y": 175,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101103008,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 600,
                "y": 175,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101103008,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 263,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101104001,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/level_err.png",
        "x": 292,
        "y": 500,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 307,
            "y": 515,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101104001,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 307,
                "y": 515,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101104001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 264,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101104002,
        "url": "http://idos.yuxianginfo.net:3678/Content/img/mon_dev/list/level_err.png",
        "x": 412,
        "y": 500,
        "width": 30,
        "height": 30,
        "show": true,
        "layer": {
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "source": {},
            "x": 427,
            "y": 515,
            "width": 30,
            "height": 30,
            "visible": true,
            "data": {
                "id": 101104002,
                "type": "device"
            },
            "_args": {
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "source": {},
                "x": 427,
                "y": 515,
                "width": 30,
                "height": 30,
                "visible": true,
                "data": {
                    "id": 101104002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "load": false
            },
            "_event": true,
            "index": 265,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false,
            "_masks": []
        }
    },
    {
        "id": 101001,
        "url": "",
        "x": 427,
        "y": 885,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 447,
            "y": 905,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101001,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 447,
                "y": 905,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101001,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 266,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101002,
        "url": "",
        "x": 1424,
        "y": 885,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 1444,
            "y": 905,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101002,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 1444,
                "y": 905,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101002,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 267,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101003,
        "url": "",
        "x": 2474,
        "y": 885,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 2494,
            "y": 905,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101003,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 2494,
                "y": 905,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101003,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 268,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101004,
        "url": "",
        "x": 3524,
        "y": 885,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 3544,
            "y": 905,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101004,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 3544,
                "y": 905,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101004,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 269,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101005,
        "url": "",
        "x": 4597,
        "y": 885,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 4617,
            "y": 905,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101005,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 4617,
                "y": 905,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101005,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 270,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101006,
        "url": "",
        "x": 5737,
        "y": 885,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 5757,
            "y": 905,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101006,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 5757,
                "y": 905,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101006,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 271,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101007,
        "url": "",
        "x": 6704,
        "y": 885,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 6724,
            "y": 905,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101007,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 6724,
                "y": 905,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101007,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 272,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101008,
        "url": "",
        "x": 7762,
        "y": 885,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 7782,
            "y": 905,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101008,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 7782,
                "y": 905,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101008,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 273,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101009,
        "url": "",
        "x": 8602,
        "y": 885,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 8622,
            "y": 905,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101009,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 8622,
                "y": 905,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101009,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 274,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101010,
        "url": "",
        "x": 8564,
        "y": 150,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 8584,
            "y": 170,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101010,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 8584,
                "y": 170,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101010,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 275,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101011,
        "url": "",
        "x": 7822,
        "y": 150,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 7842,
            "y": 170,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101011,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 7842,
                "y": 170,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101011,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 276,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101012,
        "url": "",
        "x": 6772,
        "y": 150,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 6792,
            "y": 170,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101012,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 6792,
                "y": 170,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101012,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 277,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101013,
        "url": "",
        "x": 5797,
        "y": 150,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 5817,
            "y": 170,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101013,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 5817,
                "y": 170,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101013,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 278,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101014,
        "url": "",
        "x": 4679,
        "y": 150,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 4699,
            "y": 170,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101014,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 4699,
                "y": 170,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101014,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 279,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101015,
        "url": "",
        "x": 3622,
        "y": 150,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 3642,
            "y": 170,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101015,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 3642,
                "y": 170,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101015,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 280,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101016,
        "url": "",
        "x": 2587,
        "y": 150,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 2607,
            "y": 170,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101016,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 2607,
                "y": 170,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101016,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 281,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101017,
        "url": "",
        "x": 1522,
        "y": 150,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 1542,
            "y": 170,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101017,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 1542,
                "y": 170,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101017,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 282,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101018,
        "url": "",
        "x": 457,
        "y": 150,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 477,
            "y": 170,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101018,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 477,
                "y": 170,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101018,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 283,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101019,
        "url": "",
        "x": 4154,
        "y": 500,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 4174,
            "y": 520,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101019,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 4174,
                "y": 520,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101019,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 284,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101020,
        "url": "",
        "x": 20,
        "y": 500,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 40,
            "y": 520,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101020,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 40,
                "y": 520,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101020,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 285,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101021,
        "url": "",
        "x": 2154,
        "y": 500,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 2174,
            "y": 520,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101021,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 2174,
                "y": 520,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101021,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 286,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101022,
        "url": "",
        "x": 6154,
        "y": 500,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 6174,
            "y": 520,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101022,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 6174,
                "y": 520,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101022,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 287,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    },
    {
        "id": 101023,
        "url": "",
        "x": 8940,
        "y": 500,
        "width": 40,
        "height": 40,
        "show": true,
        "layer": {
            "fillStyle": "#c33",
            "layer": true,
            "groups": [
                "deviceGroup"
            ],
            "x": 8960,
            "y": 520,
            "width": 40,
            "height": 40,
            "visible": true,
            "data": {
                "id": 101023,
                "type": "device"
            },
            "_args": {
                "fillStyle": "#c33",
                "layer": true,
                "groups": [
                    "deviceGroup"
                ],
                "x": 8960,
                "y": 520,
                "width": 40,
                "height": 40,
                "visible": true,
                "data": {
                    "id": 101023,
                    "type": "device"
                }
            },
            "text": "",
            "canvas": {
                "jQuery11240199169768054283": 1
            },
            "_layer": true,
            "_running": {
                "add": false
            },
            "_event": true,
            "index": 288,
            "eventX": null,
            "eventY": null,
            "_eventX": 0,
            "_eventY": 0,
            "intersects": false
        }
    }
      ],
      jcanvasEle: null,
      background: {
        url: "",
        width: 1050,
        height: 767,
        layer: null
      }
    };
  },
  mounted() {
    console.log($("#jcanvas"));

    this.jcanvasEle = $("#jcanvas");
    //大背景
    let bjObj = {
      url:'http://idos.yuxianginfo.net:3678/Content/img/tunnel/web/jiulianshan.png',
      width:9000,
      height:1080,
    };
    this.drawBackground(bjObj);
    //小设备图标
    this.devList.map((item,index)=>{
      this.drawDevice(item);
    })

  },

  methods:{
    drawBackground({url , width ,height}){
      this.background.width = width;
      this.background.height = height;
      new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.src = url;
      console.log(img);
      img.onerror = () => {
        console.log("图片加载失败");
      };
      img.onload = () => {
        console.log("图片加载完成");
        this.jcanvasEle.drawImage({
          index: 0,
          layer: true,
          source:url,
          x: width / 2,
          y: height / 2,
          width: width,
          height: height,
          load: (layer) => {
            resolve({
              url: url,
              width: 500,
              height: 350,
              layer: layer,
            });
          },
        });
      };
    });
    },
    drawDevice({ id, url, x, y, width = null, height = null, show = true }) {
      new Promise((resolve, reject) => {
        
        let img = document.createElement("img");
        img.src = url;
        img.onload = () => {
          this.jcanvasEle.drawImage({
            layer: true,
            groups: ["deviceGroup"],
            source: img,
            x: x + width / 2,
            y: y + height / 2,
            width: width || null,
            height: height || null,
            visible: show,
            data: {
              id: id,
              type: "device",
            },
            load: (layer) => {
              if (!width) width = layer.width;
              if (!height) height = layer.height;
              resolve({
                id,
                url,
                x,
                y,
                width: width || layer.width,
                height: width || layer.width,
                show,
                layer,
              });
            },
            contextmenu: (layer) => {
              if (!layer.draggable) {
                this.menu.x = layer.eventX;
                this.menu.y = layer.eventY;
                this.menu.itemId = layer.data.id;
                this.menu.itemType = layer.data.type;
                this.menu.show = true;
              }
              return false;
            },
            click: (layer) =>{
                console.log('被点击时，运行这些代码',layer)
            }
          });
        };
        img.onerror = () => {
          console.log(`图片加载失败:${url}`);
          this.jcanvasEle.drawRect({
            fillStyle: "#ff1744",
            layer: true,
            groups: ["deviceGroup"],
            x: x + width / 2,
            y: y + height / 2,
            width: width,
            height: height,
            visible: show,
            data: {
              id: id,
              type: "device"
            },
            add: layer => {
              resolve({
                id,
                url,
                x,
                y,
                width: width || layer.width,
                height: width || layer.width,
                show,
                layer
              });
            },
            contextmenu: layer => {
              if (!layer.draggable) {
                this.menu.x = layer.eventX;
                this.menu.y = layer.eventY;
                this.menu.itemId = layer.data.id;
                this.menu.itemType = layer.data.type;
                this.menu.show = true;
              }
              return false;
            }
          });
        };
      });
    },

    addDevice(data){
        console.log(data);
        /**
         * jcanvas -- 
         * 画布
         * 绘制
         * 图层
         * 事件
         * 样式
         */
    }
  }
};
</script>

<style scoped>
.simculate-box {
  position: relative;
  width: 1050px;
  margin: 0 auto;
  height: 767px;
  
  box-sizing: border-box;
  overflow: auto;
}
.container {
  position: relative;
}
.simculate-box .container > * {
  position: absolute;
}
#jcanvas {
  background-color: #f5f5f5;
  
}

.add-device{
    border: 1px solid green;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 99;
    font-size: 14px;
    cursor: pointer;
}
</style>