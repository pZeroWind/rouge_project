import { _decorator, Component, Node } from 'cc';
import { UGameWorldBase } from '../../../framework/core/UGameWorldBase';
import { BuffSystem } from '../systems/BuffSystem';
const { ccclass, property } = _decorator;

/**
 * 测试用世界
*/
@ccclass('TestWorld')
export class TestWorld extends UGameWorldBase {

    private m_buffSys = new BuffSystem();

    onInitialize(): void {
        this.SystemArray.push(this.m_buffSys);
    }
    
}


