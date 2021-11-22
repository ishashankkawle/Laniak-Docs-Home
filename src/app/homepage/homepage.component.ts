import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from "three";
import { Scene } from 'three';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  size = 200;
  divisions = 10;
  light1Color = 0xffffff
  light2Color = 0xffffff
  light3Color = 0xa89438
  light4Color = 0xf3cd
  mouseX = 0
  mouseY = 0
  targetX = 0
  targetY = 0
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;
  @Input() public cameraZ: number = 200;
  @ViewChild('canvas') private canvaRef: ElementRef;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  ball1: any;
  rotator: any;
  renderer: THREE.WebGLRenderer;
  ballArray = new Array();
  fillerBallArray = new Array();
  ballSpeedArray = new Array();
  scrollY = window.screenY
  lastScrollTop = 0;

  private get canvas(): HTMLCanvasElement {
    return this.canvaRef.nativeElement;
  }

  @HostListener('window:scroll', ['$event'])
  public updateCamera(ev: any) {

    let st = window.pageYOffset;
    if (st > this.lastScrollTop) {
      this.camera.position.y -= 1;
    } else {
      this.camera.position.y += 1;
    }
    this.lastScrollTop = st 
    this.rotator.rotation.x += 0.2;
    this.rotator.rotation.y += 0.2;
  }


  private createScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
    const gridHelper = new THREE.GridHelper(this.size, this.divisions);
    //this.scene.add(gridHelper);

    //------------------------------------------------------
    // GENERATE COMPONENTS
    //------------------------------------------------------
    this.camera.position.z = this.cameraZ;
    this.camera.position.y = 0;
    const ball1: THREE.Object3D = this.getBall(30, 40, 40, 0xff0021)
    const core1: THREE.Object3D = this.getBall(15, 200, 200, 0x2727)
    const ball2: THREE.Object3D = this.getBall(50, 60, 60, 0x54ce25)
    const core2: THREE.Object3D = this.getBall(25, 200, 200, 0x2727)
    const ball3: THREE.Object3D = this.getBall(25, 30, 30, 0x232323)
    const core3: THREE.Object3D = this.getBall(12, 200, 200, 0x2727)
    const ball4: THREE.Object3D = this.getBall(20, 40, 40, 0x383a1f)
    const core4: THREE.Object3D = this.getBall(10, 200, 200, 0x2727)
    const ball5: THREE.Object3D = this.getBall(25, 30, 30, 0xf4bf62)
    const core5: THREE.Object3D = this.getBall(12, 200, 200, 0x2727)
    const ball6: THREE.Object3D = this.getBall(60, 40, 40, 0x3c525d)
    const core6: THREE.Object3D = this.getBall(30, 200, 200, 0x2727)
    const ball7: THREE.Object3D = this.getBall(20, 30, 30, 0x43ffff)
    const core7: THREE.Object3D = this.getBall(10, 200, 200, 0x2727)
    const ball8: THREE.Object3D = this.getBall(10, 15, 15, 0x20ad)
    const core8: THREE.Object3D = this.getBall(5, 200, 200, 0x2727)
    const ball9: THREE.Object3D = this.getBall(30, 35, 35, 0x680072)
    const core9: THREE.Object3D = this.getBall(15, 200, 200, 0x2727)
    this.rotator = this.getBall(0, 200, 200, 0x2727)
    const fillerball1: THREE.Object3D = this.getBall(5, 25, 25, 0xf0804)
    const fillerball2: THREE.Object3D = this.getBall(5, 25, 25, 0xf0804)
    const fillerball3: THREE.Object3D = this.getBall(5, 25, 25, 0xf0804)
    const fillerball4: THREE.Object3D = this.getBall(4, 20, 20, 0xff0000)
    const fillerball5: THREE.Object3D = this.getBall(5, 20, 20, 0xfa2512)
    const fillerball6: THREE.Object3D = this.getBall(6, 25, 25, 0xf36243)
    const fillerball7: THREE.Object3D = this.getBall(3, 20, 20, 0xaad4e2)
    const fillerball8: THREE.Object3D = this.getBall(2, 20, 20, 0xba232a)
    const fillerball9: THREE.Object3D = this.getBall(5, 20, 20, 0x210a30)

    this.addInBallArray(ball1, this.ballArray)
    this.addInBallArray(ball2, this.ballArray)
    this.addInBallArray(ball3, this.ballArray)
    this.addInBallArray(ball4, this.ballArray)
    this.addInBallArray(ball5, this.ballArray)
    this.addInBallArray(ball6, this.ballArray)
    this.addInBallArray(ball7, this.ballArray)
    this.addInBallArray(ball8, this.ballArray)
    this.addInBallArray(ball9, this.ballArray)
    this.addInBallArray(fillerball1 , this.fillerBallArray)
    this.addInBallArray(fillerball2 , this.fillerBallArray)
    this.addInBallArray(fillerball3 , this.fillerBallArray)
    this.addInBallArray(fillerball4 , this.fillerBallArray)
    this.addInBallArray(fillerball5 , this.fillerBallArray)
    this.addInBallArray(fillerball6 , this.fillerBallArray)
    this.addInBallArray(fillerball7 , this.fillerBallArray)
    this.addInBallArray(fillerball8 , this.fillerBallArray)
    this.addInBallArray(fillerball9 , this.fillerBallArray)

    for (let index = 0; index < this.ballArray.length; index++) {
      this.ballSpeedArray.push(this.getRandomFloat(0.001, 0.03))
    }
    //------------------------------------------------
    // POSITIONING 
    //------------------------------------------------

    for (let index = 0; index < this.fillerBallArray.length; index++) 
    {
      this.fillerBallArray[index].position.x = this.getRandomInt(-150, 130)
      this.fillerBallArray[index].position.y = this.getRandomInt(-150, 130)
      this.fillerBallArray[index].position.z = this.getRandomInt(-150, 130)
    }
    for (let index = 0; index < this.ballArray.length; index++) 
    {
      //this.ballArray[index].position.x = this.getRandomInt(-130, 130)
      //this.ballArray[index].position.y = this.getRandomInt(-130, 130)
      //this.ballArray[index].position.z = this.getRandomInt(-130, 130)
      
      this.ballArray[index].position.x = index*20 + 1 * THREE.MathUtils.randFloatSpread(500) //* this.getRandomFloat(-2, 1)
      this.ballArray[index].position.y = index*20 + 1 * THREE.MathUtils.randFloatSpread(500) //* this.getRandomFloat(-2, 1)
      this.ballArray[index].position.z = index*20 + 1 * THREE.MathUtils.randFloatSpread(500) //* this.getRandomFloat(-2, 1)
      
    }
    this.rotator.position.y = -100


    //------------------------------------------
    // MODEL SETUP
    //------------------------------------------
    ball1.add(core1);
    ball2.add(core2);
    ball3.add(core3);
    ball4.add(core4);
    ball5.add(core5);
    ball6.add(core6);
    ball7.add(core7);
    ball8.add(core8);
    ball9.add(core9);
    ball3.add(fillerball1);
    ball2.add(fillerball2);
    ball4.add(fillerball3);
    this.rotator.add(ball1);
    this.rotator.add(ball2);
    this.rotator.add(ball3);
    this.rotator.add(ball4);
    this.rotator.add(ball5);
    this.rotator.add(ball6);
    this.rotator.add(ball7);
    this.rotator.add(ball8);
    this.rotator.add(ball9);
    ball1.add(fillerball4);
    ball3.add(fillerball5);
    ball4.add(fillerball6);
    ball7.add(fillerball7);
    ball8.add(fillerball8);
    ball3.add(fillerball9);
    this.scene.add(this.rotator);

    //--------------------------------------------------
    // ADD CONNECTING LINES
    //--------------------------------------------------
    let val1 = this.getRandomInt(0, this.ballArray.length - 1)
    for (let index = 0; index < (this.ballArray.length); index++) {
      let val2: any;
      //while(val2 == undefined || val2 == val1)
      //{
      //val2 =  this.getRandomInt(0 , this.ballArray.length-1)
      val2 = index
      //}
      this.rotator.add(0x2929, this.getLine(0x2929, this.ballArray[val1], this.ballArray[val2]))
    }

    //--------------------------------------------------
    // LIGHT 1 SETUP
    //--------------------------------------------------
    const light1 = new THREE.PointLight(this.light1Color, 2);
    light1.position.y = -300
    light1.position.x = 0
    light1.position.z = 0
    light1.intensity = 2.6

    //--------------------------------------------------
    // LIGHT 2 SETUP
    //--------------------------------------------------
    const light2 = new THREE.PointLight(this.light2Color, 2);
    light2.position.y = 500
    light2.position.x = 0
    light2.position.z = 
    light2.intensity = 2.6


    //--------------------------------------------------
    // ADD LIGHTS
    //--------------------------------------------------
    //const sphereSize = 10;
    //const pointLightHelper1 = new THREE.PointLightHelper( light1, sphereSize );
    //const pointLightHelper2 = new THREE.PointLightHelper( light2, sphereSize );
    //this.scene.add( pointLightHelper1 );
    //this.scene.add( pointLightHelper2 );

    this.scene.add(light1);
    this.scene.add(light2);
  }

  addInBallArray(ball: any , ballArray: any) {
    ballArray.push(ball);
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomFloat(min, max): number {
    return Math.random() * (max - min) + min;
  }

  private animateBall() {
    //this.rotator.rotation.x += 0.001;
    this.rotator.rotation.y += 0.002;
    for (let index = 0; index < this.ballArray.length; index++) 
    {
      this.ballArray[index].rotation.x += this.ballSpeedArray[index];
      this.ballArray[index].rotation.y += this.ballSpeedArray[index];
    }

  }

  public getLine(color, pointA, pointB) {
    let material = new THREE.LineBasicMaterial({
      color: color
    });
    var geometry = new THREE.BufferGeometry();
    geometry.setFromPoints([new THREE.Vector3(pointA.position.x, pointA.position.y, pointA.position.z), new THREE.Vector3(pointB.position.x, pointB.position.y, pointB.position.z)])
    return new THREE.Line(geometry, material)
  }

  public getBall(radius: number, widthSegment, heightSegment, color: any,) {
    const loader = new THREE.TextureLoader();
    const normalMap = loader.load('../../../assets/homepage_img/map5.jpg')
    const geometry = new THREE.SphereBufferGeometry(radius, widthSegment, heightSegment);
    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.7
    material.roughness = 0.2
    material.color = new THREE.Color(color)
    material.wireframe = true
    return new THREE.Mesh(geometry, material);
  }

  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: HomepageComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateBall();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }
}
