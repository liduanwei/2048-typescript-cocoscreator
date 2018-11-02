/*
 * @Author: AK-12 
 * @Date: 2018-11-01 12:51:23 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-11-02 13:45:55
 */
const { ccclass, property } = cc._decorator
import PhysicsManager from './PhysicsManager'
import TouchFront from './TouchFront'
import TouchBlock from './TouchBlock'
import Block from './Block'

@ccclass
export default class PlayScene extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  @property(cc.Sprite)
  background: cc.Sprite = null
  @property([cc.Node])
  blockList: cc.Node[] = []

  onLoad() {
    // init Physics
    PhysicsManager.getInstance()
      .enabled(true)
      .gravity(cc.v2(0, -500))
  }

  start() {
    // controller
    new TouchBlock(
      new TouchFront(this.background.node, 100),
      new Block(this.blockList, 50)
    ).load()
  }

  // update (dt) {}
}
