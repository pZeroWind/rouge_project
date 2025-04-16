import { _decorator, Component, find, Node } from 'cc';
import { UGameWorldBase } from '../../../framework/core/UGameWorldBase';
import { BuffSystem } from '../systems/BuffSystem';
import { FUnit } from '../../../framework/data/FUnit';
import { MovementSystem } from '../systems/MovementSystem';
const { ccclass, property } = _decorator;

/**
 * 测试用世界
*/
@ccclass('TestWorld')
export class TestWorld extends UGameWorldBase {

    private m_buffSys = new BuffSystem();
    private m_movementSys = new MovementSystem();

    onInitialize(): void {
        this.Systems.push(this.m_buffSys);
        this.Systems.push(this.m_movementSys);

        const children = this.UnitRoot.children
        for (let i = 0; i < children.length; i++) {
            const unode = children[i];
            const unit = new FUnit();
            unit.setNode(unode);
            this.getUnits().set(i, unit);
        }
    }
    
}


