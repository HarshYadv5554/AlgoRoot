import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Task } from '@/types/task';

let tasks: Task[] = [];
let nextId = 1;

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newTask: Task = {
    id: nextId++,
    title: body.title,
    description: body.description || '',
    completed: false
  };
  tasks.push(newTask);
  return NextResponse.json(newTask, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const taskId = parseInt(request.url.split('/').pop() || '0');
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }

  tasks[taskIndex] = { ...tasks[taskIndex], ...body };
  return NextResponse.json(tasks[taskIndex]);
}

export async function DELETE(request: NextRequest) {
  const taskId = parseInt(request.url.split('/').pop() || '0');
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }

  tasks = tasks.filter(t => t.id !== taskId);
  return NextResponse.json({ message: 'Task deleted successfully' });
} 