import React, { useState } from 'react';

const initialProfile = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  role: 'Manager',
};

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(profile);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSave() {
    setProfile(form);
    setEditing(false);
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold text-primary mb-4">Profile</h1>
      {editing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Role</label>
            <input name="role" value={form.role} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="space-y-2">
          <div><b>Name:</b> {profile.name}</div>
          <div><b>Email:</b> {profile.email}</div>
          <div><b>Role:</b> {profile.role}</div>
          <button className="bg-primary text-white px-4 py-2 rounded mt-4" onClick={() => setEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
