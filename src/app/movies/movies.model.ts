export interface Movie {
    id:number; //(int, optional)
    digitalId:number; // (int, optional)
    title:String; // (string, optional)
    issueNumber:number; //(double, optional)
    variantDescription:String; //(string, optional)
    description:String; //(string, optional)
    modified:Date; //(Date, optional)
    isbn:String; //(string, optional)
    upc:String; // (string, optional)
    diamondCode:String; // (string, optional)
    ean: String; //(string, optional)
    issn:String; //(string, optional)
    format:String; //(string, optional)
    pageCount:String; // (int, optional)
    textObjects:Array<TextObject>; //(Array[TextObject], optional)
    resourceURI:String; //(string, optional)
    urls:Array<Url>; //(Array[Url], optional)
    series:SeriesSummary; //(SeriesSummary, optional)
    variants:Array<ComicSummary>; // (Array[ComicSummary], optional)
    collections:Array<ComicSummary>; // (Array[ComicSummary], optional)
    collectedIssues:Array<ComicSummary>; //(Array[ComicSummary], optional)
    dates:Array<ComicDate>; //(Array[ComicDate], optional)
    prices:Array<ComicPrice>; //(Array[ComicPrice], optional)
    thumbnail:Image; //(Image, optional)
    images:Array<Image>; // (Array[Image], optional)
    creators:CreatorList; // (CreatorList, optional)
    characters:CharacterList; // (CharacterList, optional)
    stories:StoryList; // (StoryList, optional)
    events:EventList; // (EventList, optional)
    dateString?:String;
}

interface EventSummary {
    resourceURI:String;
    name:String;
}

interface EventList {
    available:Number;
    returned:Number;
    collectionURI:String;
    items:Array<EventSummary>;
}

interface StorySummary {
    resourceURI:String;
    name:String;
    type:String;
}

interface StoryList {
    available:Number;
    returned:Number;
    collectionURI:String;
    items:Array<StorySummary>;
}

interface CharacterSummary {
    resourceURI:String;
    name:String;
    role:String;
}

interface CharacterList {
    available:Number;
    returned:Number;
    collectionURI:String;
    items:Array<CharacterSummary>;
}

interface CreatorSummary {
    resourceURI:String;
    name:String;
    type:String;
}

interface CreatorList {
    available:Number;
    returned:Number;
    collectionURI:String;
    items:Array<CreatorSummary>;
}

interface ComicPrice {
    type:String;
    price:Number;
}

interface ComicDate {
    type:String;
    date:Date;
}

interface ComicSummary {
    resourceURI:String;
    name:String;
}

interface SeriesSummary {
    resourceURI:String;
    name:String;
}

interface Url {
    type:String;
    url:String;
}

interface TextObject {
    type:String;
    language:String;
    text:String;
}

interface Image {
    path:String;
    extension:String;
    }