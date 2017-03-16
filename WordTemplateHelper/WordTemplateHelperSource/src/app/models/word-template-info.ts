import { TemplateType } from './enum-defines'
/**
 * WordTemplate
 */
export class WordTemplateInfo {
    public Id: string;
    public Name: string;
    public Star: number;
    public DownloadCount: number;
    public ImageUrl: string;
    public TemplateContent: string;
    public Type: TemplateType;
    public CreateTime: string;

    constructor() {

    }
}