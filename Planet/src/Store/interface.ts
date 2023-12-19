// Get user info

export interface ILoginResponse {
    IsCommandAdmin?: boolean;
    CompanyId?: number;
    Claims?: IClaims;
    Employee?: IEmployee;
}

export interface IClaims {
    AdminClaims?: IAdminClaims;
    DashboardClaims?: IDashboardClaims;
    EmployeeClaims?: IEmployeeClaims;
    JobsiteClaims?: IJobsiteClaims;
    TeamClaims?: ITeamClaims;
}

interface IAdminClaims {
    ManageBusiness?: boolean;
    SelectBusiness?: boolean;
    CompanyAdmin?: boolean;
}

interface IDashboardClaims {
    Add?: boolean;
    Delete?: boolean;
    Edit?: boolean;
    List?: boolean;
    Publish?: boolean;
}

interface IEmployeeClaims {
    Add?: boolean;
    Delete?: boolean;
    Edit?: boolean;
    List?: boolean;
    Publish?: boolean;
}

interface IJobsiteClaims {
    Add?: boolean;
    Delete?: boolean;
    Edit?: boolean;
    List?: boolean;
    Publish?: boolean;
}

interface ITeamClaims {
    Add?: boolean;
    Delete?: boolean;
    Edit?: boolean;
    List?: boolean;
    Publish?: boolean;
}

interface ITimeTrackerClaims {
    Add?: boolean;
    Delete?: boolean;
    Edit?: boolean;
    List?: boolean;
    Publish?: boolean;
}

interface ITeamLeadTrackerClaims {
    Add?: boolean;
    Delete?: boolean;
    Edit?: boolean;
    List?: boolean;
    Publish?: boolean;
}

// Get Employee by business id

export interface IEmployee {
    Id?: number;
    BusinessId?: number;
    FirstName?: string;
    LastName?: string;
    FullName?: string;
    NickName?: string;
    PhoneNumber?: string;
    Certification?: string;
    HireDate?: Date;
    BirthDate?: Date;
    Email?: string;
    OriginalEmail?: string;
    HourlyWage?: number;
    PayrollId?: string;
    FormattedHireDate?: string;
    FormattedBirthDate?: string;
    Selected?: boolean;
    SendSms?: boolean;
    SendEmail?: boolean;
    CellCarrier?: string;
    IsCompanyAdmin?: boolean;
    IsScheduler?: boolean;
    IsWorker?: boolean;
    IsTeamLead?: boolean;
    IsAdditional?: boolean;
    Inactive?: boolean;
    Reimbursement?:boolean;
    EODSubscription?:boolean;
    //Client-Side Only, For Employees Page
    Status?: string;
    TeamName?: string;

    TeamId?: number;
    TimeTracks?: Array<ITimeTracked>;
    JobsiteTracks?: Array<any>;
    DailyTotal?: string;
    WeeklyTotal?: string;
    PhotoUrl?: string;
    JobClassifications?: Array<number>;
    PrimaryJobClassificationId?: number;
    ApplicationUserId?: string;
    EmployeeImageInfo?:IImageList;
    AutoCreatedColor?:string;
}

// Get job classification by business id
export interface IJobClassification {
    Id?: number;
    BusinessId?: number;
    Inactive?: boolean;
    Name?: string;
    Acronym?: string;
    ColorCode?: string;
    Status?: string;
    CompanyId?: number;
    Abbreviation?: string;
    GeofenceExempt ?: boolean;
}

//Job Classification wise Employee Card below Interface.
export interface IJCWiseEmployeeCard{
    abbreviation?:string;
    lstEmployeeCard?: Array<ITeamMember>;
}

export interface IEmployeeCard{
    Id?:number;
    OffWork?: boolean;
    Name?:string;
    Title?:string;
    Color?:string;
    Picture?:string;
}

// Get whose on the clock
export interface ITimeTracked {
    Id?: number;
    EmployeeId?: number;
    BusinessId?: number;
    ClockedInTime?: string;
    ClockedOutTime?: string;
    ClockedInDate?: Date;
    ClockedInDateTime?: string;
    ClockedInDateGrid?: string;
    ClockedOutDate?: Date;
    ClockedOutDateTime?: string;
    TotalMilliseconds?: number;
    JobsiteId?: number;
    JobsiteName?: string;
    ShowDatePicker?: false;
    ShowTimePicker?: false;
    ClockedInLatitude?: number;
    ClockedInLongitude?: number;
    ClockedOutLatitude?: number;
    ClockedOutLongitude?: number;
    ClockedInDistanceFromJobsite?: number;
    ClockedOutDistanceFromJobsite?: number;
    Ticks?: number;
    TimeString?: string;
    ActivitiesTracked?: Array<IActivityTracked>;
    AbsentCodeId?: number;
    StatusCode?: string;
    MultiRowLastId?: number;
    MultiRowLastClockedInDate?: Date;
    EmptyEmployeeName?: string;
    PreviousClockedInDate?:Date;
    PreviousClockedOutDate?:Date;
    PreviousClockedInDateTime?:string;
    PreviousClockedOutDateTime?:string;
    ModifiedClockedInBy?:string;
    ModifiedClockedOutBy?:string;
    TimeTracked?: ITimeTracked;
    TimeTrackedModified?: Array<ITimeTrackedModifiedHistory>;
    isTransferClockOut?:boolean;
    CreatedBy ?: number;
    isSplit ?: boolean;
    BreakTimeId ?: number;
    BreakTimeName ?: string;
    TimeZoneOffset ?: number;
    ClientDate ?: Date;
    IsBreakTimeChangedByUser ?: boolean;
}

export interface ITimeTrackedModifiedHistory
{
    Id?:number;
    ModifiedTime?:string;
    RealTime?: string;
    ModifiedType?: string;
    TimeTrackedId?: number;
}

export interface IActivityTracked {
    Id?: number;
    Name?: string;
    PercentOfDay?: number;
}


// Get absent code by business id
export interface IAbsentCode {
    Id?: number;
    Code?: string;    
    Name?: string;
    InActive?:boolean;
    Status?:string;
    CompanyId?:number;
    Color?:string;
}
// Get Team time tracks (for team lead time tracker screen)

export interface ITeamTimeTrack extends ITimeTracked {
    TeamMember?: string;
    DailyTotal?: string;
    WeeklyTotal?: string;
    ShowClocks?: boolean;
    IsClockInDisabled?: boolean;
    IsClockOutDisabled?: boolean;
    isVisible?:boolean;
    CreatedBy?: number;
    isSplit?: boolean;
    BreakTimeId ?: number;
    BreakTimeName ?: string;
}


// Get Jobsites

export interface IJobsite {
    Id?: number;
    BusinessId?: number;
    Name?: string;
    Address?: string;
    Address1?: string;
    Address2?: string;
    City?: string;
    State?: string;
    Zip?: string;
    Latitude?: number;
    Longitude?: number;
    Comment?: string;
    Notes?: Array<IJobsiteNote>;
    Inactive?: boolean;
    Status?: string;
    JobsiteDays?: number;
    PhotosUrl?: string;
    GeoFenceMiles?: string;
    ImageList?: Array<IImageList>;
    Location?:boolean;
    JobsiteId ?: string;
    CostCodes ?: Array<number>;
    SavedCostCodes ?: Array<ISiteCostCode>;
}
export interface IImageList {
    imageString?: any
    imageName?:string;
    imageURL?:string;
    displayImageURL?:string;
    Notes?:string;
    ID?:number;
    isDeleted?:boolean;
}

export interface IJobsiteNote {
    JobsiteId?: number;
    Note?: string;
    Date: Date;
    showDescription?: false;
}
export interface ISiteCostCode 
{
    Id ?: number ;
    SiteId ?: number;
    CostCodeId ?: number ;
    Name ?: string
}

// Get Business
export interface IBusiness {
    Id?: number;
    Name?: string;
    Address?: string;
    Address2?: string;
    City?: string;
    State?: string;
    Zip?: string;
    Phone?: string;
    Email?: string;
    SendSms?: boolean;
    SendEmail?: boolean;
    CellCarrier?: string;
    showEmployees?: boolean;
    Inactive?: boolean;
    Status?: string;
    Employee?: Array<IEmployee>;
    CompanyPolicyId?: number;
    BreakTimePolicyId?: number;
    MinimumHoursForDeduction?: number;
}

export interface IBusinessPolicy {
    Id?: number;
    Name?: string;
}

// Get Dashboard (in progress)
// let body = {
//       Id: this.businessId.toString(),
//       DateString: this.startOfView.format("YYYY-MM-DD"),
//       Range: this.range.toString(),
//       DashBoardView: this.dashboardView,
//       OrderBy: this.orderBy.toString(),
//       IsDescending: this.isDescending.toString(),
//       LoggedInEmployeeId: this.businessService.userInfo.Employee.Id.toString()
//     }

export interface IDashBoard {
    DateSchedules?: Array<IDateSchedule>;
    Employees?: Array<IEmployee>;
    JobClassifications?: Array<IJobClassification>;
}

export interface IDateSchedule {
    Id?: number;
    BusinessId?: number;
    Date?: Date;
    InThePast?: boolean;
    DateString?: string;
    Schedules?: Array<ISchedule>;
    ShowSchedules?: boolean;
    ShowCloneButton?: boolean;
    Employees?: Array<IEmployee>;
    JobClassifications?: Array<IJobClassification>;
    Revealed?: boolean;
}

export interface IScheduleCompanyEquipment {
    CompanyEquipmentId?: number;
    Inactive?: boolean;
    HourMeterStart?: number;
    HourMeterEnd?: number;
    Notes?: string;
}

export interface IMaterialByJobsite {
    JobsiteId?: number;
    JobsiteName?: string;
    ReceivedLineItems?: Array<IReceivedLineItem>;
    DailyCostString?: string;
}

export interface IMaterialByDay {
    Date?: Date;
    DateString?: string;
    MaterialByJobsites?: Array<IMaterialByJobsite>;
    TotalCostString?: string;
}

export interface IReportMaterialReceivingVm {
    MaterialReceivingReportId?: number;
    MaterialReceivedLineItems?: Array<IReceivedLineItem>;
    EquipmentReceivedLineItems?: Array<IReceivedLineItem>;
    MaterialReceivingTotalCost?: string;
    ScheduleId?: number;
}

export interface IReceivedLineItem {
    Id?: number;
    jJobsiteId?: number;
    VendorId?: number;
    MaterialId?: number;
    EquipmentId?: number;
    Unit?: number;
    Quanity?: number;
    Cost?: string;
    Measurements?: Array<any>;
    ReferenceNumber?: string;
    PhotoUrl?: string;
    Date?: Date;
    ScheduleId?: number;
    VendorApprovedMaterials?: Array<any>;
    VendorApprovedEquipments?: Array<any>;
}

export interface IDailyReceiving {
    Id?: number;
    Inactive?: false;
    MaterialReceivedLineItems?: Array<IReceivedLineItem>;
    EquipmentReceivedLineItems?: Array<IReceivedLineItem>;
}

// export interface IMeasurement extends IReceivingNamedModel{
//     // BusinessId?: number;
//     // Name?: string;
// }


// export interface IVendorApprovedMaterial extends IReceivingModelBase {
//     Material?: IMaterial;
//     Pn?: string;
// }

// export interface IVendorApprovedEquipment extends IReceivingModelBase {
//     Equipment?: IEquipment;
//     Pn?: string;
// }

export interface IJobsitePhotosByDay {
    Date?: Date;
    DateString?: string;
    DailyPhotos?: Array<IDailyPhoto>;
    ShowDescription?: false;
}

export interface IDailyPhoto {
    Id?: number;
    imageString?: any;
    Inactive?: false;
    Caption?: string;
    Description?: string;
    PhotoUrl?: string;
    imageName?: string;
    displayImageURL?:any;
    isRowDeleted?:boolean;
    CreatedDateTime?:Date;
    CreatedBy?:string;
    ModifiedDateTime?:string;
    ModifiedBy?:string;
    isRecordEdit?:boolean;
    isImageDeleted?:boolean;
    Date?: Date;
    DateString?: string;
    Notes?:string;
    hiddenRow?:boolean;//if user search record in JobSite screen, then unmatch row will be hidden
    //editTimeExpire?:boolean;
}

export interface IEmployeeStatus {
    EmployeeId?: number;
    EmployeeStatus?: string;
    ClockedIn?: Date;
    ClockedOut?: Date;
}

export interface ISchedule {
    Id?: number;
    BusinessId?: number;
    DateScheduleId?: number;
    Date?: Date;
    JobsiteId?: number;
    JobSiteName?: string;
    JobSiteDesignation?:string;
    DistanceFromJobsite?: number; 
    TeamIds?: Array<number>;
    TeamLeadId?: number;
    TeamLeadName?: string;
    TaskIds?: Array<number>;
    TeamAdditions?: Array<number>;
    TeamAdditionsCount?:number;
    //weatherInfo?: IWeatherInfo;
    StartTime?: string;
    MeetTime?: string;
    Notes?: string;
    JobsiteNote?: string;
    AdditionalWork?: string;
    LoadList?: string;
    ToBePublished?:boolean;
    DatePublished?: Date;
    Equipments?: Array<IScheduleCompanyEquipment>;
    ShowSchedule?: true;
    DailyReceiving?: IDailyReceiving;
    TimeTracksApproved?: true;
    MaterialsApproved?: false;
    RentalsApproved?: false;
    EquipmentApproved?: false;
    PhotosApproved?: false;
    NotesApproved?: false;
    EodReportApproved?: false;
    DailyPhotos?: Array<IDailyPhoto>;
    EmployeeStatus?: Array<IEmployeeStatus>;
    TeamMembers?: Array<ITeamMember>;
    BulkEmployee?: Array<ITeamMember>;
    EquipmentProfiles?: Array<IEquipmentProfile>;
    EquipmentProfilesCount?: number;
    EquipmentProfilesAddition?:Array<number>;
    isExpandedSchedule?:boolean;
    ActionTime ?: Date;
    //20190814
    TeamMembersCount?: number;
    CreatedThrough?:string ;
    IsCloning?: boolean;
    IsDeleting?: boolean;
    IsValid?: boolean;
    AutomaticScheduleEmployeeIds? : Array<IAutomaticSchduleEmployeesIds>;
    IsCreatedAutomatic?:boolean;
    EquipmentProfileCount ?: number;
    JobSiteInActive?:boolean;
    Dashboard?:string ;
    BulkEquipmentProfiles ?: Array <IEquipmentProfile>;
    isLoading?: boolean;
    //Only related to auto update of frontend when equipment dashboard has any deleteion.
    DashboardView?:string;
    SortOrder?:boolean;
    OrderBy?:number;
    DashboardRange?:number;
    EquipmentMoveFrom ?:number;
    Action ?: string;
    ScheduleEmployeeCount?:number;
    IsSubscribed?:boolean;
    CostCodes ?: Array<number>;
}
export interface IAutomaticSchduleEmployeesIds{
    EmployeeId:number;
}
export interface IDailyNoteAndPhotos {
    Date: Date;
    DateString: string;
    JobsitePhotos?: Array<IDailyPhoto>;
    JobsiteNote?: string;
    ShowDetails?: boolean;
}

export interface IEquipmentProfile {
    Id?: number;
    BusinessId?: number;
    EquipName?: string;
    CategoryId?: number;
    CategoryName?: string;          
    Type?: string;
    TrackId?: string;
    EquipmentNumber?: string;
    VinNumber?: string;
    MeterReading?:number;
    MeterReadingUnit?: string;
    Model?: string;
    StatusId?: number;
    StatusName?: string;
    Inactive?: boolean;
    PurchaseDate?:Date ;
    WarrantyDate?: Date;  
    OwnerShipMode?: string;
    PhotosUrl?: string;    
    ImageList?: Array<IImageList>;    
    EquipmentProfileNotes ?: Array<IEquipmentProfileNote>   
    EmployeeId?: number;
    AssetValue?: number;
    Year?: string;
    IsSelected?:boolean;
    OffWork?:boolean;
    Adding?:boolean;
    IsAdditional?:boolean;
    Transferring?:boolean;
    Title?:string;
    Color?:string;
    Picture?:string;
    Deleting?:boolean;
    IsModalSelected?:boolean;    
    HomeBaseId?:number;
    Make?:string;
    IsOnHomeBase?:boolean;    
}
export interface IImageList {
    imageString?: any
    imageName?:string;
    imageURL?:string;
    displayImageURL?:string;
    Notes?:string;
    ID?:number;
    isDeleted?:boolean;
}
export interface IEquipmentProfileNote
{
    EquipmentProfileId?: number;
    Notes?: string;
    Date?: Date;
    EmployeeId?: number;
    Id ?: number;
    IsRowDeleted?: boolean;
}

export interface ITeamMember {
    Adding?: boolean,
    Deleting?: boolean,
    Transferring?: boolean,
    OffWork?: boolean,
    IsAdditional?: boolean,
    IsSelected?: boolean,
    IsModalSelected?: boolean,
    Id?: number,
    Name?: string,
    Title?: string,
    Color?: string,
    Picture?: string,
    IsAlreadyClockedIn?: boolean,
    ValidateMessage?: string,
    TimeTracks?: Array<ITimeTracked>;
    AutoCreatedColor?:string;
    ColourCode?: string;
}

export interface ITeam{
    Id?: number;
    BusinessId?: number;
    Name?: string;
    EmployeeIds?: Array<number>;
    Inactive?: false;
}