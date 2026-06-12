export default function Button({ href, children, className, download = false }) {
   return (
      <a href={href} className={`flex items-center gap-3 py-3 px-5 border rounded-xl border-blue-neon ${className}`} download={download}>{children}</a>
   )
}
