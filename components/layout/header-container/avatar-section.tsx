// components/layout/header-container/avatar-section.tsx
export function AvatarSection({ avatarUrl = 'https://i.pravatar.cc/300' }) {
  return (
    <div className="w-full flex justify-center z-10">
      <div className="rounded-full shadow-lg border-4 border-orange-300/25 overflow-hidden">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-48 h-48 object-cover"
        />
      </div>
    </div>
  )
}