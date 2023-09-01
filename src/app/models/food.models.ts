export interface Results {
    count: number;
    page: number;
    page_count: number;
    page_size: number;
    products: { [key: string]: Array<PurpleProduct | null | string> | number | { [key: string]: Array<string[] | FluffyProduct | string> | TentacledProduct | number | string } | string }[];
    skip: number;

}

export interface PurpleProduct {
    id?: string;
    ingredients_original_tags: string[];
    percent_estimate?: number;
    percent_max?: number;
    percent_min?: number;
    rank?: number;
    text?: string;
    vegan?: FromPalmOil;
    vegetarian?: FromPalmOil;
    ciqual_food_code?: string;
    from_palm_oil?: FromPalmOil;
    percent?: number;
    has_sub_ingredients?: FromPalmOil;
    labels?: string;
    processing?: string;
    origins?: string;
    material?: string;
    number_of_units?: number | string;
    quantity_per_unit?: string;
    quantity_per_unit_unit?: QuantityPerUnitUnit;
    quantity_per_unit_value?: number | string;
    recycling?: Recycling;
    shape?: string;
    weight_measured?: number | string;
    weight_specified?: number;
    fields?: string[];
    images?: string[];
    import_t?: number;
    manufacturer?: number | string;
    name?: Name;
    source_licence?: SourceLicence;
    source_licence_url?: string;
    url?: null | string;
    ingredient?: string;
    label?: string;
}

export enum FromPalmOil {
    Maybe = "maybe",
    No = "no",
    Yes = "yes",
}

export enum Name {
    AppElcoco = "app-elcoco",
    Barilla = "barilla",
    BarillaFranceSa = "barilla-france-sa",
    Ferrero = "Ferrero",
    FerreroFranceCommerciale = "ferrero-france-commerciale",
    FoodRepo = "FoodRepo",
    KelloggS = "kellogg-s",
    LeaNature = "lea-nature",
    PepsicoFrance = "pepsico-france",
}

export enum QuantityPerUnitUnit {
    Cl = "cl",
    G = "g",
    Ml = "ml",
}

export enum Recycling {
    EnDiscard = "en:discard",
    EnRecycle = "en:recycle",
    EnRecycleInGlassBin = "en:recycle-in-glass-bin",
    EsEcopontoAmarelo = "es:ecoponto-amarelo",
}

export enum SourceLicence {
    CreativeCommonsAttribution40InternationalLicense = "Creative Commons Attribution 4.0 International License",
}

export interface FluffyProduct {
    conditions_tags: string[];
    footprint_per_kg: number;
    matching_tag_id: string;
    percent: number;
    percent_estimate: number;
    processing_factor: number;
    tag_id: string;
    tag_type: string;
    type: Type;
}

export interface Type {
    deforestation_risk: number;
    name: string;
    soy_feed_factor: number;
    soy_yield: number;
}

export interface TentacledProduct {
    ingredients?: Ingredients[];
    origins_of_ingredients?: OriginsOfIngredients;
    packaging?: ProductPackaging;
    production_system?: ProductionSystem;
    threatened_species?: ThreatenedSpecies;
    agribalyse_food_code?: string;
    co2_agriculture?: number;
    co2_consumption?: number;
    co2_distribution?: number;
    co2_packaging?: number;
    co2_processing?: number;
    co2_total?: number;
    co2_transportation?: number;
    code?: string;
    dqr?: string;
    ef_agriculture?: number;
    ef_consumption?: number;
    ef_distribution?: number;
    ef_packaging?: number;
    ef_processing?: number;
    ef_total?: number;
    ef_transportation?: number;
    is_beverage?: number;
    name_en?: string;
    name_fr?: string;
    score?: number | null;
    version?: string;
    agribalyse_proxy_food_code?: string;
    warning?: string;
    ad?: AdEnum | number;
    al?: AdEnum | number;
    at?: AdEnum | number;
    ax?: AdEnum | number;
    ba?: AdEnum | number;
    be?: AdEnum | number;
    bg?: AdEnum | number;
    ch?: AdEnum | number;
    cy?: AdEnum | number;
    cz?: AdEnum | number;
    de?: AdEnum | number;
    dk?: AdEnum | number;
    dz?: AdEnum | number;
    ee?: AdEnum | number;
    eg?: AdEnum | number;
    es?: AdEnum | number;
    fi?: AdEnum | number;
    fo?: AdEnum | number;
    fr?: AdEnum | number;
    gg?: AdEnum | number;
    gi?: AdEnum | number;
    gr?: AdEnum | number;
    hr?: AdEnum | number;
    hu?: AdEnum | number;
    ie?: AdEnum | number;
    il?: AdEnum | number;
    im?: AdEnum | number;
    is?: AdEnum | number;
    it?: AdEnum | number;
    je?: AdEnum | number;
    lb?: AdEnum | number;
    li?: AdEnum | number;
    lt?: AdEnum | number;
    lu?: AdEnum | number;
    lv?: AdEnum | number;
    ly?: AdEnum | number;
    ma?: AdEnum | number;
    mc?: AdEnum | number;
    md?: AdEnum | number;
    me?: AdEnum | number;
    mk?: AdEnum | number;
    mt?: AdEnum | number;
    nl?: AdEnum | number;
    no?: AdEnum | number;
    pl?: AdEnum | number;
    ps?: AdEnum | number;
    pt?: AdEnum | number;
    ro?: AdEnum | number;
    rs?: AdEnum | number;
    se?: AdEnum | number;
    si?: AdEnum | number;
    sj?: AdEnum | number;
    sk?: AdEnum | number;
    sm?: AdEnum | number;
    sy?: AdEnum | number;
    tn?: AdEnum | number;
    tr?: AdEnum | number;
    ua?: AdEnum | number;
    uk?: AdEnum | number;
    us?: AdEnum | number;
    va?: AdEnum | number;
    world?: AdEnum | number;
    xk?: AdEnum | number;
    labels?: number;
    origins?: number;
    packagings?: number;
    agb_category?: number;
    agribalyse?: Agribalyse;
    grade?: AdEnum | null;
    ef_single_score_log_stddev?: number;
    likeliest_impacts?: LikeliestImpacts;
    likeliest_recipe?: { [key: string]: number };
    mass_ratio_uncharacterized?: number;
    uncharacterized_ingredients?: UncharacterizedIngredients;
    uncharacterized_ingredients_mass_proportion?: UncharacterizedIngredientsMassProportionClass;
    uncharacterized_ingredients_ratio?: UncharacterizedIngredientsMassProportionClass;
    warnings?: string[];
    sizes?: Sizes;
    uploaded_t?: number | string;
    uploader?: string;
    angle?: number | null | string;
    coordinates_image_size?: number | string;
    geometry?: string;
    imgid?: number | string;
    normalize?: null | string;
    rev?: number | string;
    white_magic?: null | string;
    x1?: number | null | string;
    x2?: number | null | string;
    y1?: number | null | string;
    y2?: number | null | string;
    ocr?: number;
    orientation?: null | string;
    display?: Display;
    small?: Display;
    thumb?: Display;
    weight?: number;
    weight_100g?: number;
    weight_percent?: number;
    gln?: string;
    gpcCategoryCode?: string;
    gpcCategoryName?: string;
    isAllergenRelevantDataProvided?: string;
    lastChangeDateTime?: Date;
    partyName?: string;
    productionVariantDescription?: string;
    publicationDateTime?: Date;
}
export interface Ingredients {
    id: string;
    text: string;
    quantity: string;
}
export enum AdEnum {
    A = "a",
    B = "b",
    C = "c",
    D = "d",
    E = "e",
}

export interface Agribalyse {
    agribalyse_food_code?: string;
    co2_agriculture?: number;
    co2_consumption?: number;
    co2_distribution?: number;
    co2_packaging?: number;
    co2_processing?: number;
    co2_total?: number;
    co2_transportation?: number;
    code?: string;
    dqr?: string;
    ef_agriculture?: number;
    ef_consumption?: number;
    ef_distribution?: number;
    ef_packaging?: number;
    ef_processing?: number;
    ef_total?: number;
    ef_transportation?: number;
    is_beverage?: number;
    name_en?: string;
    name_fr?: string;
    score?: number;
    agribalyse_proxy_food_code?: string;
    warning?: string;
    version?: string;
}

export interface Display {
    de?: string;
    en?: string;
    es?: string;
    fr?: string;
    it?: string;
    uk?: string;
    hr?: string;
    sr?: string;
    ro?: string;
    ar?: string;
    az?: string;
    ka?: string;
    pl?: string;
    pt?: string;
    sq?: string;
    bg?: string;
    ko?: string;
    hu?: string;
    nl?: string;
    cs?: string;
    zh?: string;
    fi?: string;
    ru?: string;
    da?: string;
    sv?: string;
    et?: string;
    lt?: string;
    lv?: string;
    no?: string;
    tr?: string;
    ch?: string;
}

export interface LikeliestImpacts {
    Climate_change: number;
    EF_single_score: number;
}

export interface OriginsOfIngredients {
    aggregated_origins: AggregatedOrigin[];
    epi_score: number;
    epi_value: number;
    origins_from_origins_field: string[];
    transportation_score: number;
    transportation_scores: { [key: string]: number };
    transportation_value: number;
    transportation_values: { [key: string]: number };
    value: number;
    values: { [key: string]: number };
    warning?: OriginsOfIngredientsWarning;
}

export interface AggregatedOrigin {
    epi_score: string;
    origin: string;
    percent: number;
    transportation_score: number | null | string;
}

export enum OriginsOfIngredientsWarning {
    OriginsAre100_PercentUnknown = "origins_are_100_percent_unknown",
}

export interface ProductPackaging {
    non_recyclable_and_non_biodegradable_materials: number;
    packagings: PackagingElement[];
    score: number;
    value: number;
    warning?: string;
}

export interface PackagingElement {
    ecoscore_material_score: number;
    ecoscore_shape_ratio: number;
    material: string;
    number_of_units?: number | string;
    quantity_per_unit?: string;
    quantity_per_unit_unit?: QuantityPerUnitUnit;
    quantity_per_unit_value?: number | string;
    recycling?: Recycling;
    shape: string;
    weight_measured?: number | string;
    non_recyclable_and_non_biodegradable?: FromPalmOil;
    weight_specified?: number;
    material_shape?: string;
}

export interface ProductionSystem {
    labels: string[];
    value: number;
    warning?: ProductionSystemWarning;
}

export enum ProductionSystemWarning {
    NoLabel = "no_label",
}

export interface Sizes {
    "100": The100;
    "400": The100;
    full: The100;
    "200"?: The100;
}

export interface The100 {
    h: number;
    w: number;
}

export interface ThreatenedSpecies {
    ingredient?: string;
    value?: number;
}

export interface UncharacterizedIngredients {
    impact: string[];
    nutrition: string[];
}

export interface UncharacterizedIngredientsMassProportionClass {
    impact: number;
    nutrition: number;
}
