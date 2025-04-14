/**
 * 组件存储类
 * 用于存储当前System所必须的组件
 * 建议存放于继承至FGameSystemBase的类中
 */
export class TComponentStorage<T>{
    private m_components: Map<number, T> = new Map<number, T>();

    add(id: number, comp: T){
        this.m_components.set(id, comp);
    }

    // 获取组件
    get(id: number): T | undefined {
        return this.m_components.get(id);
    }

    // 删除组件
    delete(id: number): boolean {
        return this.m_components.delete(id);
    }
}