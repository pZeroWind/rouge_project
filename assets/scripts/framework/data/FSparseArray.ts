import { FUnit } from "./FUnit";

/**
 * 稀疏数组
 * 用于储存实体
 */
export class FSparseArray<T extends FUnit> {
    private m_sparse: number[] = []; // 稀疏数组，索引为实体 ID，值为 dense 数组的索引
    private m_dense: T[] = [];       // 密集数组，按插入顺序存储组件
    private m_size: number = 0;

    get(id: number): T {
        const denseIndex = this.m_sparse[id];
        return this.m_dense[denseIndex];
    }

    set(id: number, value: T): void {
        this.m_sparse[id] = this.m_size;
        this.m_dense[this.m_size] = value;
        this.m_size++;
    }

    delete(id: number): void {
        if (!this.has(id)) return;

        const denseIndexToRemove = this.m_sparse[id];
        const lastEId = this.m_dense[this.m_size - 1].Id;

        // 将最后一个元素移动到被删除的位置
        this.m_dense[denseIndexToRemove] = this.m_dense[this.m_size - 1];
        
        // 更新被移动元素的稀疏索引
        this.m_sparse[lastEId] = denseIndexToRemove;
        
        // 清理
        delete this.m_sparse[id];
        this.m_size--;
    }

    has(id: number): boolean {
        return this.m_sparse[id] !== undefined && 
               this.m_sparse[id] < this.m_size;
    }

    clear(): void {
        this.m_sparse.length = 0;
        this.m_dense.length = 0;
        this.m_size = 0;
    }

    forEach(callback: (value: T, id: number) => void): void {
        for (let index = 0; index < this.m_size; index++) {
            let id = this.m_sparse[index];
            callback(this.m_dense[id], id);
        }
    }
}