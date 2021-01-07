export class Sample{

    id :number;
    sample_id :string;
    order_no :string;
    order_entry_datetime :string;
    sample_barcode :string;
    constances_id :string;
    ces_id :string;
    collector_id :string;
    collector_name :string;
    consent :string;
    fasting :string;
    menstruating :string;
    container_type :string;
    collection_type :string;
    tube_expirydate :string;
    tube_expired :string;
    tube_status :string;
    collect_datetime :string;
    centri_datetime :string;
    centri_speed :string;
    centri_brake :string;
    centri_temperature :string;
    centri_duration :string;
    centri_runno :string;
    freezing_datetime :string;
    abort_reason :string;
    order_state :string;
    scan_datetime :string;
    scan_by :string;
    box_id :string;
    sample_id_lims :string;
    to_update_lims :string;
    import_process_id :string;
    form_id :string;
    consent_id :string;
    consent_date_check :string;
    consent_status :string;
}

export class ExpectedSample{

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
}