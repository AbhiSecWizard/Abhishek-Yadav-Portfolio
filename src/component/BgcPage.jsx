export const BgcPage = ({ children }) => {
  return (
    <section className="relative min-h-screen bg-[#0f172e]">

      <div className="absolute inset-0 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]
        bg-[size:40px_40px] 
        opacity-70  ">
      </div>
     {
        children
     }
    </section>
  );
};