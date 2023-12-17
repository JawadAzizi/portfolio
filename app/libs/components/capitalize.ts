export default function (text: string): string {
    if(text.length < 1)return "";
    return text.substring(0, 1).toUpperCase() + text.substring(1)
}