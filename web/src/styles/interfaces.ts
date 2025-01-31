export type HeaderType = 'CompanyHeader' | 'DefaultHeader' | 'hidden' | 'ProductHeader' | 'ProductHeaderWithSeller'

export type BGColorsType = 'bg-text' | 'bg-background' | 'bg-primary' | 'bg-secondary' | 'bg-accent'

export type TextColorsType = 'text-text' | 'text-background' | 'text-primary' | 'text-secondary' | 'text-accent'

export type FontWeight =
  | 'font-thin'
  | 'font-extralight'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-semibold'
  | 'font-bold'
  | 'font-extrabold'
  | 'font-black'

export type FontFamily = 'font-roboto' | 'font-inter' | 'font-intertight'

export type FontSize =
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl'
  | 'text-7xl'
  | 'text-8xl'
  | 'text-9xl'
  | ''

export type JustifyContent =
  | 'justify-normal'
  | 'justify-start'
  | 'justify-end'
  | 'justify-center'
  | 'justify-between'
  | 'justify-around'
  | 'justify-evenly'
  | 'justify-stretch'

export interface DefaultStylesBase {
  mdJustifyContent: string
  justifyContent: JustifyContent
  color: BGColorsType
  fontWeight: FontWeight
  fontSize: FontSize
}
