

export type whyChoosUsType={
    id: number,
    title: string,
    section:string,
    subSection: string,
    content:string,
    summary:string,
    image:string
}
export type categoryType={
    id: number,
    title: string,
    section:string,
    subSection: string,
    content:string,
    summary:string
}
export type catWordSnippet={
    id: number,
    title: string,
    sectionTitle: string,
    subSectionTitle:string,
    content:string,
    content1: string,
    content2: string,
    content3: string,
    webImage: string
}
export type categoryGeneralInfo={
    id: 2,
    name: string,
    address: string,
    cell: string,
    country: string,
    provState: string,
    city: string,
    postal: string,
    extra: string,
    siteArray: string[]
}
export type categorySponsor={

}
export type imageCategory={
    id: number,
    name: string,
    image: string
}
export type pageFeedback={
    id: number,
    name: string,
    email: string,
    page: string,
    comment: string,
    rating: number,
    pageCount: number,
    average: number,
    category: number
}
export type allCategoryType={
    id: number,
    name: string,
    section: string,
    categories: categoryType[],
    catWordSnippet: catWordSnippet[],
    categoryGeneralInfo:categoryGeneralInfo[],
    categorySponsor: categorySponsor[],
    imageCategory: imageCategory[],
    pageFeedback: pageFeedback[]
}
export type articleType={
    id:number,
    section:string,
    imageSection:string,
    summary:string,
    subSection:string,
    content:string,
    subSection1:string,
    content1:string,
    subSection2:string,
    content2:string,
    date:string
}
export type articlesType={
    id:number,
    article:articleType[],
    title:string

}