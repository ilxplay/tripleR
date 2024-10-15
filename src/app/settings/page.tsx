import React from 'react';


export function UserPreferences() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-5xl font-bold">User Preferences</h1>

    </div>
  )
}

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <UserPreferences />

    </div>
  )
}
