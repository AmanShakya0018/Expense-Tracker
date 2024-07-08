import {
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";


const Buttons = () => {
  return (<><div className="pt-12 flex flex-row space-x-10 gap-x-20 items-center justify-center">
    <button className="relative text-lg transition-transform duration-500 hover:scale-105 active:duration-75 active:scale-95 overflow-hidden rounded-lg px-12 py-6">
      <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-300">
        <SignUpButton mode="modal" />
      </span>
      <span
        aria-hidden
        className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
      />
    </button>

    <button className="relative text-lg transition-transform duration-700 hover:scale-105 active:duration-75 active:scale-95 overflow-hidden rounded-lg px-12 py-6">
      <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-300">
        <SignInButton mode="modal" />
      </span>
      <span
        aria-hidden
        className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
      />
    </button>
  </div>
  </>)
}

export default Buttons;