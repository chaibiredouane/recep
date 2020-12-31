export class Sample{

    id:number;
    ces_id: number;
    sample_barcode: string;
    container_type: string;
    collection_type: string;
    collect_date: string;
    collect_time: string;
    time_elapsed: number;
    constances_id: string;
    late_status: string;
    label_status: string;
    scan_datetime:Date;
    scan_by:string;
    // constructor(public ces_id: number,public sample_barcode: string,public container_type: string,
    //             public collection_type: string,public collect_date: string,public collect_time: string,
    //             public time_elapsed: number,public constances_id: string,public late_status: string,public label_status: string){}
}