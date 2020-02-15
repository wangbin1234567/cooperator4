export interface TruthType{
    page?: number
}

export interface TotalType{
    chinaTotal: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    },
    chinaAdd: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    },
    lastUpdateTime: string
}

export interface AreaType{
    name: string,
    total: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    },
    today: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    },
    children?: AreaType[],
    active?: boolean
}

export interface TruthType1{
     title: string,
author: string,
authordesc: string,
id: string,
date: string,
markstyle: string,
result: string,
explain: string,
abstract: string,
tag: any[]
type: number,
videourl: string,
cover: string,
coverrect: string,
coversqual: string,
section: string,
iscolled: boolean,
arttype: string
}