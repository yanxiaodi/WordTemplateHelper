/**
 * BaseResponseResultInfo
 */
export class BaseResponseResultInfo {
    /**是否成功 */
    isSuccess: boolean;
    /**响应信息 */
    message: string;
    constructor() {

    }
}

/**
 * ResponseResultInfo 响应结果
 */
export class ResponseResultInfo<T> extends BaseResponseResultInfo {
    /**响应结果实体 */
    result: T;
}