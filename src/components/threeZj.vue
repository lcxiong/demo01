<template>
  <div id="container"></div>
  <!-- <img :src="require('../../public/static/image/apple.png')" alt=""> -->
</template>
<script>
//npm i three
import * as THREE from "three";

//npm i three-obj-mtl-loader
import { OBJLoader, MTLLoader } from "three-obj-mtl-loader";

// import MTLLoader from  'three-mtl-loader';
// import OBJLoader from  'three-obj-loader';

//npm i three-css2drender
import { CSS2DRenderer, CSS2DObject } from "three-css2drender";

//npm i three-orbit-controls
const OrbitControls = require("three-orbit-controls")(THREE);

export default {
  name: "threejs",
  data() {
    return {
      scene: "", //场景
      light: "", //光
      camera: "", //相机
      fov: 60, //
      controls: "", //控制器
      renderer: "", //渲染器
      labelRenderer: "", //标签渲染 
    };
  },
  mounted() {
    this.init();
    this.addObj();
    this.animate();
  },
  methods: {
    init() {
      //场景
      this.scene = new THREE.Scene();
      this.scene.add(new THREE.AmbientLight(0x05ae09));//环境光
      this.light = new THREE.DirectionalLight(0xdfebff, 0.45);//从正上方(不是位置)照射过来的平行光，0.45的强度
      this.light.position.set(50, 200, 100);
      this.light.position.multiplyScalar(0.3);
      this.scene.add(this.light);

      //相机
      this.camera = new THREE.PerspectiveCamera(
        this.fov,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      this.camera.position.set(10, 90, 65);
      this.camera.lookAt(this.scene.position);

      //控制器
      this.controls = new OrbitControls(this.camera);
      this.controls.target.set(0, 0, 0);
      this.controls.minDistance = 80;
      this.controls.maxDistance = 400;
      this.controls.maxPolarAngle = Math.PI / 3;
      this.controls.update();

      //渲染器
      this.renderer = new THREE.WebGLRenderer({ alpha: true }); //会在body里面生成一个canvas标签,
      this.renderer.setPixelRatio(window.devicePixelRatio); //为了兼容高清屏幕
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      const container = document.getElementById("container");
      container.appendChild(this.renderer.domElement);

      //标注渲染
      this.labelRenderer = new CSS2DRenderer();
      this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
      this.labelRenderer.domElement.style.position = "absolute";
      this.labelRenderer.domElement.style.top = 0;
      container.appendChild(this.labelRenderer.domElement);
      window.addEventListener("resize", this.onWindowResize, false); //添加窗口监听事件(resize-onresize即窗口或框架被重新调整大小)
    },
    //窗口变化事件
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
    },
    addObj() {
      var mtlLoader = new MTLLoader();
      mtlLoader.setPath( "http://192.168.50.103:8901/3d/cft/" );
      // mtlLoader.setPath( "public/3d/cft/" );
      mtlLoader.load('cft.mtl', (materials) =>{
        materials.preload();
        alert(333,process.env.BASE_URL)
        let objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath("http://192.168.50.103:8901/3d/cft/");
        // objLoader.setPath("public/3d/cft/");
        objLoader.load('cft.obj', (obj) => {
          obj.scale.set(0.8, 0.8, 0.8);
          obj.position.set(-40, -50, 10);
             this.addSprite(
                -10,
                -5,
                -8,
                "https://xdy.52cfzy.com/gxheadImg/customer/z9x0mE0q20191113175223.jpg",
                -121,
                "我长方体",
                obj,
                function () {
                    console.log('我长方体被点击了')
                }
              );
          this.scene.add(obj);
        })
        
      });
      
      //包含材质


      // new MTLLoader()
      //   .setPath("../assets/model/modelFirst/")
      //   .load("modelFirst.mtl", (materials) => {
      //     materials.preload();
      //     alert(111)
      //     console.log(new OBJLoader())
      //     new OBJLoader()
      //       .setMaterials(materials)
      //       .setPath("../assets/model/modelFirst/")
      //       .load("modelFirst.obj", (obj) => {
      //         alert(222)
      //         obj.scale.set(0.8, 0.8, 0.8);
      //         obj.position.set(-40, -50, 10);
      //         // this.addSprite(
      //         //   -95,
      //         //   -55,
      //         //   -110,
      //         //   "/static/image/shoop.png",
      //         //   -70,
      //         //   "SKECH",
      //         //   obj,
      //         //   function () {}
      //         // );
      //         // this.addSprite(
      //         //   -80,
      //         //   -65,
      //         //   -90,
      //         //   "/static/image/cloth.png",
      //         //   -52,
      //         //   "FILA",
      //         //   obj,
      //         //   function () {}
      //         // );
      //         // this.addSprite(
      //         //   -100,
      //         //   -45,
      //         //   -80,
      //         //   "/static/image/apple.png",
      //         //   -63,
      //         //   "APPLE",
      //         //   obj,
      //         //   function () {}
      //         // );
      //         this.scene.add(obj);
      //       });
      //   });

    //   new MTLLoader()
    //     .setPath("/public/static/model/VANS/")
    //     .load("VANS.mtl", (materials) => {
    //       materials.preload();
    //       new OBJLoader()
    //         .setMaterials(materials)
    //         .setPath("/public/static/model/VANS/")
    //         .load("VANS.obj", (obj) => {
    //           obj.scale.set(0.8, 0.8, 0.8);
    //           obj.position.set(-40, -50, 10);
    //           this.addSprite(
    //             -165,
    //             -55,
    //             -170,
    //             "/public/static/image/vans.png",
    //             -58,
    //             "VANS--查看",
    //             obj,
    //             () => {
    //               this.viewDetailModel();
    //             }
    //           );
    //           this.scene.add(obj);
    //         });
    //     });

    //   new MTLLoader()
    //     .setPath("/public/static/model/LEVIS/")
    //     .load("LEVIS.mtl", (materials) => {
    //       materials.preload();
    //       new OBJLoader()
    //         .setMaterials(materials)
    //         .setPath("/public/static/model/LEVIS/")
    //         .load("LEVIS.obj", (obj) => {
    //           obj.scale.set(0.8, 0.8, 0.8);
    //           obj.position.set(-40, -50, 10);
    //           this.addSprite(
    //             -170,
    //             -40,
    //             -100,
    //             "/public/static/image/television.png",
    //             -64,
    //             "LEVIS",
    //             obj,
    //             function () {}
    //           );
    //           this.addSprite(
    //             -170,
    //             -35,
    //             -120,
    //             "/public/static/image/jac.png",
    //             -100,
    //             "KORADIOP",
    //             obj,
    //             function () {}
    //           );
    //           this.addSprite(
    //             -170,
    //             -40,
    //             -140,
    //             "/public/static/image/clo.png",
    //             -47,
    //             "天天",
    //             obj,
    //             function () {}
    //           );
    //           this.scene.add(obj);
    //         });
    //     });

    //   new MTLLoader()
    //     .setPath("/public/static/model/sanxing/")
    //     .load("sanxing.mtl", (materials) => {
    //       materials.preload();
    //       new OBJLoader()
    //         .setMaterials(materials)
    //         .setPath("/public/static/model/sanxing/")
    //         .load("sanxing.obj", (obj) => {
    //           obj.scale.set(0.8, 0.8, 0.8);
    //           obj.position.set(-40, -50, 10);
    //           this.addSprite(
    //             -125,
    //             -40,
    //             -98,
    //             "/public/static/image/phone.png",
    //             -50,
    //             "三星",
    //             obj,
    //             function () {}
    //           );
    //           this.scene.add(obj);
    //         });
    //     });

    //   new MTLLoader()
    //     .setPath("/public/static/model/square/")
    //     .load("zhengfangxing.mtl", (materials) => {
    //       materials.preload();
    //       new OBJLoader()
    //         .setMaterials(materials)
    //         .setPath("/public/static/model/square/")
    //         .load("zhengfangxing.obj", (obj) => {
    //           obj.scale.set(0.8, 0.8, 0.8);
    //           obj.position.set(-40, -50, 10);
    //           this.addSprite(
    //             -90,
    //             -50,
    //             -55,
    //             "/public/static/image/sensor.png",
    //             -95,
    //             "传感器节点",
    //             obj,
    //             () => {
    //               this.alarmDetail();
    //             }
    //           );
    //           this.scene.add(obj);
    //         });
    //     });
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.render();
    },
    render() {
      this.renderer.render(this.scene, this.camera);
      this.labelRenderer.render(this.scene, this.camera);
    },

    addSprite(){
      console.log('addSprite');
    }
  },
};
</script>

<style>
</style>