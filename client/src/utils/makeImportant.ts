export default function makeImportant(className: string) {
    return className
        .split(" ")
        .map((cls) => `!${cls}`)
        .join(" ");
}
