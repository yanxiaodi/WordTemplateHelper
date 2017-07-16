
/**
 * AppGlobal 全局定义 单例模式
 */
export class AppGlobal {
    private static instance: AppGlobal = new AppGlobal();



    /**
     * 服务器地址
     * 
     * @type {string}
     * @memberOf AppGlobal
     */
    public server: string = "http://localhost:5000/api/WordTemplate";


    /**当前用户信息 */
    public currentUserId: string = "af296d94-fc62-46d2-846f-8fe05875f314";

    /**
     * 当前机构Id
     * 
     * @type {string}
     * @memberOf AppGlobal
     */
    public currentOrganizationId: string = "acf3d747-81d7-46e2-952f-2b2ee755f277";
    /**分页页数 */
    public pageSize: number = 10;

    // public clientId: string = "6741300f-925a-425b-b5a1-170191bf8f24";
    // public redirectUrl: string = "http://localhost:8080/login";
    // public graphScopes: string = "user.read mail.send";

    public auth: any;
    public authenticator: any;
    public accessToken: string;

    /**
     * 获取当前实例
     * 
     * @static
     * @returns {AppGlobal}
     */
    public static getInstance(): AppGlobal {
        return AppGlobal.instance;
    }


}