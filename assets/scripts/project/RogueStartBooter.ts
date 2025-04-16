import { _decorator, Component, Node, resources } from 'cc';
import { UGameStartBooter } from "../framework/UGameStartBooter";
import { UnitMgr } from './runtime/managers/UnitManager';
import { WorldMgr } from './runtime/managers/WorldManager';
const { ccclass, property } = _decorator;


@ccclass('RogueStartBooter')
export class RogueStartBooter extends UGameStartBooter {

    @property({ tooltip: "测试模式", type: Boolean })
    TestMode: boolean

    async onInitialize() {
        await UnitMgr.initialize();
        if (this.TestMode){
            await WorldMgr.loadWorld("TestWorld", (node) =>{
                node.setParent(this.BootRoot);
                node.setPosition(0,0,0);
                console.log("测试世界初始化完毕")
            });
        } else {
            await WorldMgr.loadWorld("", (node) =>{
                console.log("世界初始化完毕")
            });
        }
    }

}