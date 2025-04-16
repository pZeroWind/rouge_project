import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
import { FGameSystemBase } from '../../../framework/core/FGameSystemBase';
import { UGameWorldBase } from '../../../framework/core/UGameWorldBase';
import { TComponentStorage } from '../../../framework/data/TComponentStorage';
import { SpeedComponent } from '../components/SpeedComponent';
const { ccclass, property } = _decorator;

/**
 * Buff系统
 */
@ccclass('MovementSystem')
export class MovementSystem extends FGameSystemBase {
    
    private m_speedCompStorage = new TComponentStorage<SpeedComponent>();

    onInitialize(world: UGameWorldBase): void {
        world.getUnits().forEach((u, i)=>{
            //TODO 初始化实体组件
            this.m_speedCompStorage.add(u.Id, new SpeedComponent());
        });
    }

    onUpdate(world: UGameWorldBase, deltaTime: number): void {
        world.getUnits().forEach((u, i)=>{
            //TODO 获取实体组件并移动
            const speedComp = this.m_speedCompStorage.get(u.Id);
            if(speedComp){
                speedComp.value = 5.0
                u.getNode().translate(new Vec3(speedComp.value * deltaTime, 0, 0));
            }
        });
    }
    
}