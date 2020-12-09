<template>
  <div id="container"></div>

  <div class="tip">状态信息</div>
  <div class="msg" v-show="isShow">
    正在运行中...
    <span style="color: #fff;cursor: pointer;" @click="isShow = false">X</span>
  </div>
</template>

<script>
//npm i three
import * as THREE from "three";

//npm i three-obj-mtl-loader
import { OBJLoader, MTLLoader } from "three-obj-mtl-loader";

//npm i three-css2drender
import { CSS2DRenderer, CSS2DObject } from "three-css2drender";

//npm i three-orbit-controls
const OrbitControls = require("three-orbit-controls")(THREE);

import { defineComponent, ref, onMounted, reactive, toRefs } from "vue";

export default defineComponent({
  name: "threejs",
  setup() {
    let demoTitle = ref("three.js");
    let state = reactive({
      isShow: false,
    });

    let scene = ""; //场景
    let light = ""; //光
    let camera = ""; //相机
    const fov = 45; //
    let controls = ""; //控制器
    let renderer = ""; //渲染器
    let labelRenderer = ""; //标签渲染
    let biaozhudiv = "";
    let img = "";
    let biaozhuLabel = "";

    // 初始化 方法
    let init = () => {
      //场景
      scene = new THREE.Scene();
      // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
      let axisHelper = new THREE.AxisHelper(250);
      scene.add(axisHelper);
      scene.add(new THREE.AmbientLight(0xffffff)); //环境光

      light = new THREE.DirectionalLight(0xffffff, 0.1); //从正上方(不是位置)照射过来的平行光，0.1的强度
      // light.position.set(50, 200, 100);
      light.position.set(-30, 10, 60);
      light.position.multiplyScalar(0.35);
      //告诉平行光需要开启阴影投射
      light.castShadow = true;
      scene.add(light);

      //相机
      camera = new THREE.PerspectiveCamera(
        fov,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(-30, 10, 60);
      camera.lookAt(scene.position);

      //控制器
      controls = new OrbitControls(camera);
      controls.target.set(0, 0, 0);
      controls.minDistance = 80;
      controls.maxDistance = 500;
      // controls.maxPolarAngle = Math.PI / 3;//垂直旋转
      
      console.log(controls)

      controls.update();

      //渲染器
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); //会在body里面生成一个canvas标签,
      renderer.setPixelRatio(window.devicePixelRatio); //为了兼容高清屏幕
      renderer.setSize(window.innerWidth, window.innerHeight);
      //告诉渲染器需要阴影效果
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap; // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap  // PCFSoftShadowMap

      //渲染背景色
      renderer.setClearColor("#09193a", 0);

      const container = document.getElementById("container");
      container.appendChild(renderer.domElement);

      //标注渲染
      labelRenderer = new CSS2DRenderer();
      labelRenderer.setSize(window.innerWidth, window.innerHeight);
      labelRenderer.domElement.style.position = "absolute";
      labelRenderer.domElement.style.top = 0;
      container.appendChild(labelRenderer.domElement);
      window.addEventListener("resize", onWindowResize, false); //添加窗口监听事件(resize-onresize即窗口或框架被重新调整大小)
    };
    //窗口变化 方法
    let onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      labelRenderer.setSize(window.innerWidth, window.innerHeight);
    };
    //添加 .mtl和.obj 方法
    let addObj = () => {
      let mtlLoader = new MTLLoader();
      //mtlLoader.setPath("http://192.168.50.103:8901/3d/cft/");
      mtlLoader.setPath("/3d/cft/");
      mtlLoader.load("cft.mtl", (materials) => {
        materials.preload();
        let objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        // objLoader.setPath("http://192.168.50.103:8901/3d/cft/");
        objLoader.setPath("/3d/cft/");
        objLoader.load("cft.obj", (obj) => {
          obj.scale.set(0.5, 0.5, 0.5);
          obj.position.set(0, 0, 0);
          // addSprite(
          //   -10,
          //   -5,
          //   -8,
          //   "https://cn.vuejs.org/images/logo.png",
          //   -121,
          //   "桌子",
          //   obj,
          //   (e) => {
          //     // alert("正在运行中");
          //     state.isShow = !state.isShow;
          //     console.log(e);
          //   }
          // );
          scene.add(obj);
        });
      });
    };
    //animate 方法
    let animate = () => {
      requestAnimationFrame(animate);
      render();
    };
    //render 方法
    let render = () => {
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };

    //addSprite 方法
    let addSprite = (x, y, z, image, loc, text, Mash, callback) => {
      //添加div标签
      biaozhudiv = document.createElement("div");
      //添加图标标签
      img = document.createElement("img");
      img.style.width = "30px";
      img.src = image;

      img.style.marginLeft = loc + "px";
      biaozhudiv.className = "lable";
      //两者的执行顺序
      biaozhudiv.textContent = text;
      biaozhudiv.appendChild(img);
      //标注的样式
      biaozhudiv.id = "biaozhu";
      biaozhudiv.style.color = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
      biaozhudiv.style.fontSize = 14 + "px";
      biaozhudiv.style.fontFamily = "Georgia,serif";
      biaozhudiv.style.width = "150px";
      biaozhudiv.style.cursor = "pointer";
      biaozhudiv.style.color = "#fff";
      biaozhudiv.style.border = "1px solid red";
      biaozhudiv.style.background = "#09193a";
      biaozhudiv.style.width = "200px";
      biaozhudiv.style.height = "40px";

      biaozhudiv.onclick = () => {
        callback(Mash);
      };
      biaozhuLabel = new CSS2DObject(biaozhudiv);
      biaozhuLabel.position.set(x, y, z);
      Mash.add(biaozhuLabel);
    };

    var raycaster = new THREE.Raycaster()
    var mouse = new THREE.Vector2()
    //onMouseClick
    let onMouseClick = ()=>{
      console.log('onMouseClick')
    //将鼠标点击位置的屏幕坐标转换成threejs中的标准坐标

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = (event.clientY/window.innerHeight) *2 + 1
 
    // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
    raycaster.setFromCamera( mouse, camera );

    // 获取raycaster直线和所有模型相交的数组集合
    var intersects = raycaster.intersectObjects(scene.children,true);
    console.log('scene.children',scene.children)
    console.log(intersects);

        
    }

    onMounted(() => {
      window.addEventListener( 'click', onMouseClick, false );
      init();
      addObj();
      animate();
    });

    return {
      demoTitle,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  overflow: hidden;
  /* 隐藏body窗口区域滚动条 */
}
#container {
  height: 100vh;
  width: 100vw;
  background: url("https://www.hightopo.com/demo/annexMonitor/assets/DEMO%E7%B3%BB%E7%BB%9F%E7%95%8C%E9%9D%A2.png")
    center center / cover no-repeat;
}

.tip {
  position: absolute;
  margin: 0px;
  box-sizing: border-box;
  overflow: hidden;
  width: 380px;
  height: 180px;
  right: 10px;
  top: 10px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0px;

  line-height: 180px;
  text-align: center;
  color: #05ae09;
  font-size: 0.12rem;
  border: 1px solid #05ae09;
}

.msg {
  position: absolute;

  overflow: hidden;
  width: 380px;
  height: 180px;
  left: 10px;
  top: 10px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0px;

  line-height: 180px;
  text-align: center;
  color: #05ae09;
  font-size: 0.12rem;
  border: 1px solid #05ae09;
}

.lable{
  box-sizing: border-box;
  border: 1px solid red;
}
</style>