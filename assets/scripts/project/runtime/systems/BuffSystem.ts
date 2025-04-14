import { _decorator, Component, Node } from 'cc';
import { FGameSystemBase } from '../../../framework/core/FGameSystemBase';
import { UGameWorldBase } from '../../../framework/core/UGameWorldBase';
import { TComponentStorage } from '../../../framework/data/TComponentStorage';
import { BuffComponent } from '../components/BuffComponent';
const { ccclass, property } = _decorator;

/**
 * Buff系统
 */
@ccclass('BuffSystem')
export class BuffSystem extends FGameSystemBase {
    
    m_buffCompStorage = new TComponentStorage<BuffComponent>();

    onInitialize(world: UGameWorldBase): void {
        world.getUnits().forEach((u, i)=>{
            //TODO 初始化实体组件
            this.m_buffCompStorage.add(u.Id, new BuffComponent())
        });
    }

    onUpdate(world: UGameWorldBase, deltaTime: number): void {
        
    }
    
}


