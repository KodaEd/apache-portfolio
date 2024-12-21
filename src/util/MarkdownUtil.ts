import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const MARKDOWN_PATH = path.join(process.cwd(), 'content');

export async function getMarkdownContent(filePath: string) {
  try {
    const fullPath = path.join(MARKDOWN_PATH, filePath);
    const fileContents = await fs.promises.readFile(fullPath, 'utf8');
    return fileContents;
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return null;
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get('path');

  if (!path) {
    return NextResponse.json(
      { error: 'No path provided' },
      { status: 400 }
    );
  }

  try {
    const content = await getMarkdownContent(path);
    if (!content) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }
    return new NextResponse(content);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load markdown file' },
      { status: 500 }
    );
  }
}