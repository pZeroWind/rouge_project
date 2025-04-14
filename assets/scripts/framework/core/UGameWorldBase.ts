import { _decorator, Component, Node } from 'cc';
import { FSparseArray } from '../data/FSparseArray';
import { FUnit } from '../data/FUnit';
import { FGameSystemBase } from './FGameSystemBase';
const { ccclass, property } = _decorator;

/**
 * 世界基类
 * 用于地图的基本数据
*/
@ccclass('UGameWorldBase')
export abstract class UGameWorldBase extends Component {
    
    @property({ tooltip:"世界名称" })
    WorldName: string = ""

    @property({ tooltip:"系统列表", type:[FGameSystemBase] })
    SystemArray:FGameSystemBase[] = [];

    private UnitsSparseSet = new FSparseArray<FUnit>();

    getUnits():FSparseArray<FUnit> { return this.UnitsSparseSet; }

    start() {
        this.onInitialize();
        //TODO 载入实体

        //载入系统组件
        for (let i = 0; i < this.SystemArray.length; i++) {
            this.SystemArray[i].onInitialize(this);
        }
    }

    update(deltaTime: number) {
        //遍历
        for (let i = 0; i < this.SystemArray.length; i++) {
            this.SystemArray[i].onUpdate(this, deltaTime);
        }
    }

    //初始化
    abstract onInitialize(): void;

}


