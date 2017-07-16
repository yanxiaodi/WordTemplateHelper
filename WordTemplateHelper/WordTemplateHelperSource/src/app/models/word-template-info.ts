import { TemplateType } from './enum-defines'
/**
 * WordTemplate
 */
export class WordTemplateInfo {
    public id: string;
    public name: string;
    public star: number;
    public downloadCount: number;
    public imageUrl: string;
    public templateContent: string;
    public type: TemplateType;
    public createTime: string;

    constructor() {

    }
}