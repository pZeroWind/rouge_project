import { instantiate, Node, Prefab, resources } from "cc";

/**
 * 场景管理器
 */
class WorldManager{

    loadWorld(name: string, onCompleted:(node:Node)=> void) : Promise<void> {
        return new Promise((resolve,reject)=> {
            resources.preload(`prefabs/worlds/${name}`, (err: Error) => {
                if (err) {
                    console.error("预加载失败:", err);
                    reject(err);
                    return;
                }
                resources.load(`prefabs/worlds/${name}`, Prefab, (err, data)=>{
                    if (err) {
                        console.error(err);
                        reject(err);
                        return;
                    }
                    console.log(`世界${name} 加载成功`)
                    const node = instantiate(data);
                    onCompleted(node);
                    resolve();
                });
            });
            
            
        });
    }
}

export const WorldMgr = new WorldManager();